// app/(auth)/forgot-password/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // 실제 비밀번호 재설정 메일 발송 로직은 여기에 구현
            await new Promise(resolve => setTimeout(resolve, 1000)); // 모의 API 호출
            setSuccess(true);
        } catch (err: any) {
            setError(err.message || '비밀번호 재설정 이메일 발송 중 오류가 발생했습니다');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-white">
            <div className="w-full max-w-md space-y-8">
                {/* 로고 */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-blue-500">LOOPT</h1>
                    <p className="mt-2 text-sm text-gray-500">비밀번호를 잊으셨나요?</p>
                </div>

                {success ? (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-5 rounded-md">
                        <h2 className="text-lg font-medium mb-2">이메일이 발송되었습니다</h2>
                        <p className="text-sm mb-4">
                            {email}로 비밀번호 재설정 링크를 발송했습니다. 이메일을 확인하여 비밀번호를 재설정해주세요.
                        </p>
                        <p className="text-sm mb-4">
                            이메일을 받지 못하셨나요? 스팸함을 확인하시거나 다시 시도해주세요.
                        </p>
                        <div className="flex justify-center mt-4">
                            <Link
                                href="/login"
                                className="text-blue-500 hover:text-blue-600 font-medium"
                            >
                                로그인 페이지로 돌아가기
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

                        <p className="text-sm text-gray-500">
                            가입 시 사용한 이메일을 입력하시면 비밀번호 재설정 링크를 보내드립니다.
                        </p>

                        {/* 이메일 입력 */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="이메일을 입력하세요."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* 전송 버튼 */}
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                {loading ? '처리 중...' : '비밀번호 재설정 이메일 보내기'}
                            </button>
                        </div>

                        <div className="flex justify-center space-x-4 text-sm text-gray-500">
                            <Link href="/login" className="hover:text-blue-500">
                                로그인
                            </Link>
                            <span>|</span>
                            <Link href="/register" className="hover:text-blue-500">
                                회원가입
                            </Link>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}