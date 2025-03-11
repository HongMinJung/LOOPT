// app/(auth)/reset-password/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function ResetPasswordPage() {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [hashPresent, setHashPresent] = useState(false);

    // Supabase 클라이언트 생성
    const supabase = createClientComponentClient();

    useEffect(() => {
        // URL에서 해시 파라미터 체크 (Supabase가 비밀번호 재설정 링크에 해시 파라미터를 포함)
        const checkHash = async () => {
            const hash = window.location.hash;
            if (hash && hash.includes('type=recovery')) {
                setHashPresent(true);
            } else {
                // 잘못된 접근이면 로그인 페이지로 리다이렉트
                router.push('/login');
            }
        };

        checkHash();
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 비밀번호 일치 확인
        if (password !== confirmPassword) {
            setError('비밀번호가 일치하지 않습니다.');
            return;
        }

        // 비밀번호 길이 확인 (Supabase 기본 요구사항)
        if (password.length < 6) {
            setError('비밀번호는 최소 6자 이상이어야 합니다.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            // Supabase Auth를 사용한 비밀번호 업데이트
            const { error: updateError } = await supabase.auth.updateUser({
                password: password
            });

            if (updateError) {
                throw updateError;
            }

            setSuccess(true);

            // 3초 후 로그인 페이지로 리다이렉트
            setTimeout(() => {
                router.push('/login');
            }, 3000);
        } catch (err: any) {
            console.error('비밀번호 재설정 에러:', err);
            setError(err.message || '비밀번호 재설정 중 오류가 발생했습니다');
        } finally {
            setLoading(false);
        }
    };

    if (!hashPresent && !success) {
        return (
            <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-white">
                <div className="w-full max-w-md text-center">
                    <h1 className="text-2xl font-bold text-gray-900">잘못된 접근입니다</h1>
                    <p className="mt-2 text-gray-600">
                        이메일에 전송된 링크를 통해 접근해주세요.
                    </p>
                    <div className="mt-6">
                        <Link
                            href="/forgot-password"
                            className="text-blue-500 hover:text-blue-600 font-medium"
                        >
                            비밀번호 재설정 페이지로 돌아가기
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-white">
            <div className="w-full max-w-md space-y-8">
                {/* 로고 */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-blue-500">LOOPT</h1>
                    <p className="mt-2 text-sm text-gray-500">새 비밀번호를 설정해주세요</p>
                </div>

                {success ? (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-5 rounded-md">
                        <h2 className="text-lg font-medium mb-2">비밀번호가 재설정되었습니다</h2>
                        <p className="text-sm mb-4">
                            새 비밀번호로 로그인할 수 있습니다. 곧 로그인 페이지로 이동합니다.
                        </p>
                        <div className="flex justify-center mt-4">
                            <Link
                                href="/login"
                                className="text-blue-500 hover:text-blue-600 font-medium"
                            >
                                로그인 페이지로 이동
                            </Link>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                                {error}
                            </div>
                        )}

                        {/* 새 비밀번호 입력 */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">새 비밀번호</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="새 비밀번호를 입력하세요."
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {showPassword ? (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        ) : (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                                            />
                                        )}
                                    </svg>
                                </button>
                            </div>
                            <p className="mt-1 text-xs text-gray-500">비밀번호는 최소 6자 이상이어야 합니다.</p>
                        </div>

                        {/* 비밀번호 확인 */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">비밀번호 확인</label>
                            <div className="relative">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="비밀번호를 다시 입력하세요."
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {showConfirmPassword ? (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        ) : (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                                            />
                                        )}
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* 재설정 버튼 */}
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                                    loading
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                                }`}
                            >
                                {loading ? '처리 중...' : '비밀번호 재설정'}
                            </button>
                        </div>

                        <div className="flex justify-center text-sm">
                            <Link href="/login" className="text-blue-500 hover:text-blue-600 font-medium">
                                로그인으로 돌아가기
                            </Link>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}