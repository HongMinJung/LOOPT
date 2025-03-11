import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface RegisterData {
    email: string;
    password: string;
    name: string;
}

export async function registerUser({ email, password, name }: RegisterData) {
    const supabase = createClientComponentClient();

    // Supabase Auth로 사용자 등록
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
            data: {
                name,
            }
        }
    });

    if (authError) {
        throw new Error(authError.message);
    }

    // 사용자 프로필 정보 저장
    if (authData.user) {
        // 사용자 테이블에 정보 저장
        const { error: profileError } = await supabase
            .from('users')
            .insert({
                id: authData.user.id,
                email: authData.user.email,
                name: name,
                username: email.split('@')[0], // 기본 사용자명으로 이메일 아이디 사용
                join_date: new Date().toISOString(),
            });

        if (profileError) {
            console.error('사용자 프로필 저장 오류:', profileError);
            // 프로필 저장 실패 시에도 계정은 생성되었으므로 오류를 던지지 않고 로그만 남김
        }

        // 사용자 통계 초기화
        const { error: statsError } = await supabase
            .from('user_stats')
            .insert({
                user_id: authData.user.id,
                studies_joined: 0,
                studies_hosted: 0,
                total_contributions: 0,
                completion_rate: 0,
            });

        if (statsError) {
            console.error('사용자 통계 초기화 오류:', statsError);
        }
    }

    return authData;
}