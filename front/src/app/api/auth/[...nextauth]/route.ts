// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { supabase } from "@/lib/supabase";

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                // Supabase 인증 사용
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: credentials.email,
                    password: credentials.password,
                });

                if (error || !data.user) {
                    return null;
                }

                // 사용자 프로필 정보 가져오기
                const { data: userData, error: userError } = await supabase
                    .from('users')
                    .select('*')
                    .eq('email', credentials.email)
                    .single();

                if (userError || !userData) {
                    // 사용자 프로필이 없으면 생성
                    if (data.user) {
                        const { data: newUser, error: createError } = await supabase
                            .from('users')
                            .insert([{
                                id: data.user.id,
                                email: data.user.email,
                                username: data.user.email?.split('@')[0] || `user_${Date.now()}`,
                                name: data.user.user_metadata.full_name || data.user.email?.split('@')[0] || 'New User',
                                profile_image: data.user.user_metadata.avatar_url || '',
                            }])
                            .select()
                            .single();

                        if (!createError && newUser) {
                            // 사용자 통계 테이블 초기화
                            await supabase
                                .from('user_stats')
                                .insert([{ user_id: data.user.id }]);

                            return {
                                id: data.user.id,
                                email: data.user.email,
                                name: newUser.name,
                                image: newUser.profile_image,
                            };
                        }
                    }
                    return null;
                }

                return {
                    id: data.user.id,
                    email: data.user.email,
                    name: userData.name,
                    image: userData.profile_image,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            // 초기 로그인 시 사용자 정보를 토큰에 추가
            if (user) {
                token.id = user.id;

                // OAuth 로그인인 경우 Supabase에 사용자 정보 추가/갱신
                if (account && (account.provider === 'github' || account.provider === 'google')) {
                    // Supabase Auth에 사용자 생성 또는 연결
                    const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
                        email: user.email!,
                        email_confirm: true,
                        user_metadata: {
                            full_name: user.name,
                            avatar_url: user.image,
                            provider: account.provider,
                        },
                    });

                    if (!authError && authUser.user) {
                        // 사용자 프로필 정보 확인 및 갱신
                        const { data: existingUser } = await supabase
                            .from('users')
                            .select('id')
                            .eq('email', user.email)
                            .single();

                        if (!existingUser) {
                            // 새 사용자 추가
                            const { data: newUser } = await supabase
                                .from('users')
                                .insert([{
                                    id: authUser.user.id,
                                    email: user.email,
                                    username: user.email?.split('@')[0] || `user_${Date.now()}`,
                                    name: user.name || 'New User',
                                    profile_image: user.image || '',
                                }])
                                .select()
                                .single();

                            // 사용자 통계 테이블 초기화
                            await supabase
                                .from('user_stats')
                                .insert([{ user_id: authUser.user.id }]);
                        }
                    }
                }
            }
            return token;
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id as string;
            }
            return session;
        },
    },
    pages: {
        signIn: '/login',
        error: '/login',
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };