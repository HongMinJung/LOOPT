// app/(auth)/login/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // 실제 로그인 로직은 여기에 구현
            await new Promise(resolve => setTimeout(resolve, 1000)); // 모의 API 호출
            router.push('/dashboard');
        } catch (error) {
            console.error('로그인 에러:', error);
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
                    <p className="mt-2 text-sm text-gray-500">LOOPT와 함께 성장하세요.</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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

                    {/* 비밀번호 입력 */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="비밀번호를 입력하세요."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {/* 눈 모양 아이콘 */}
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
                    </div>

                    {/* 로그인 상태 유지 체크박스 */}
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                            로그인 상태 유지
                        </label>
                    </div>

                    {/* 로그인 버튼 */}
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            {loading ? '로그인 중...' : '로그인'}
                        </button>
                    </div>

                    {/* 링크 */}
                    <div className="flex justify-center space-x-4 text-sm text-gray-500">
                        <Link href="/find-email" className="hover:text-blue-500">
                            이메일 찾기
                        </Link>
                        <span>|</span>
                        <Link href="/forgot-password" className="hover:text-blue-500">
                            비밀번호 찾기
                        </Link>
                        <span>|</span>
                        <Link href="/register" className="hover:text-blue-500">
                            회원가입
                        </Link>
                    </div>
                </form>

                {/* 간편 로그인 */}
                <div className="mt-10">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">간편로그인</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-4 gap-2">
                        <button
                            className="flex justify-center items-center p-2 border-0"
                            aria-label="Facebook 로그인"
                        >
                            <svg className="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                            </svg>
                        </button>
                        <button
                            className="flex justify-center items-center p-2 border-0"
                            aria-label="Apple 로그인"
                        >
                            <svg className="w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z"/>
                            </svg>
                        </button>
                        <button
                            className="flex justify-center items-center p-2 border-0"
                            aria-label="Google 로그인"
                        >
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/>
                                <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/>
                                <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/>
                                <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/>
                            </svg>
                        </button>
                        <button
                            className="flex justify-center items-center p-2 border-0"
                            aria-label="Twitter 로그인"
                        >
                            <svg className="w-6 h-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}