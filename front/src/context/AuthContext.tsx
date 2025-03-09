'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User } from '@/types';

interface AuthState {
    user: User | null;
    loading: boolean;
}

interface AuthContextType extends AuthState {
    login: (email: string, password: string) => Promise<User>;
    register: (userData: Partial<User> & { password: string }) => Promise<User>;
    logout: () => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [state, setState] = useState<AuthState>({
        user: null,
        loading: true,
    });

    useEffect(() => {
        // 세션 체크 및 사용자 정보 로드
        const checkSession = async () => {
            try {
                // 로컬 스토리지에서 사용자 정보 가져오기 (실제로는 토큰 기반 인증 사용)
                const userJson = localStorage.getItem('user');
                if (userJson) {
                    setState({
                        user: JSON.parse(userJson),
                        loading: false,
                    });
                } else {
                    setState({ user: null, loading: false });
                }
            } catch (error) {
                console.error('인증 초기화 오류:', error);
                setState({ user: null, loading: false });
            }
        };

        checkSession();
    }, []);

    const login = async (email: string, password: string): Promise<User> => {
        // 실제 구현에서는 API 호출
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // 간단한 인증 로직 (실제로는 서버 검증)
                if (email === 'test@example.com' && password === 'password') {
                    const user: User = {
                        id: '1',
                        name: '테스트 사용자',
                        email,
                        status: 'online'
                    };

                    localStorage.setItem('user', JSON.stringify(user));
                    setState({ user, loading: false });
                    resolve(user);
                } else {
                    reject(new Error('이메일 또는 비밀번호가 잘못되었습니다.'));
                }
            }, 1000);
        });
    };

    const register = async (userData: Partial<User> & { password: string }): Promise<User> => {
        // 실제 구현에서는 API 호출
        return new Promise((resolve) => {
            setTimeout(() => {
                const { password, ...userWithoutPassword } = userData;
                const newUser: User = {
                    id: Date.now().toString(),
                    name: userData.name || 'New User',
                    email: userData.email || 'user@example.com',
                    status: 'online',
                    ...userWithoutPassword
                };

                localStorage.setItem('user', JSON.stringify(newUser));
                setState({ user: newUser, loading: false });
                resolve(newUser);
            }, 1000);
        });
    };

    const logout = async (): Promise<void> => {
        // 실제 구현에서는 API 호출
        return new Promise((resolve) => {
            setTimeout(() => {
                localStorage.removeItem('user');
                setState({ user: null, loading: false });
                resolve();
            }, 500);
        });
    };

    const resetPassword = async (email: string): Promise<void> => {
        // 실제 구현에서는 API 호출
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`비밀번호 재설정 이메일 발송: ${email}`);
                resolve();
            }, 1000);
        });
    };

    return (
        <AuthContext.Provider
            value={{
                ...state,
                login,
                register,
                logout,
                resetPassword
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}