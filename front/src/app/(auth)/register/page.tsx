'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import TermsModal from './components/TermsModal';
import SocialLoginButtons from './components/SocialLoginButtons';
import { registerUser } from './utils/registerUser';

// 폼 데이터 인터페이스
interface RegisterFormData {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    agreeTerms: boolean;
}

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState<RegisterFormData>({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        agreeTerms: false
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 폼 유효성 검사
        if (formData.password !== formData.confirmPassword) {
            setError('비밀번호가 일치하지 않습니다');
            return;
        }

        if (!formData.agreeTerms) {
            setError('이용약관에 동의해주세요');
            return;
        }

        setError('');
        setLoading(true);

        try {
            // Supabase를 통한 회원가입 처리
            await registerUser({
                email: formData.email,
                password: formData.password,
                name: formData.name
            });

            // 회원가입 성공 메시지
            alert('회원가입이 완료되었습니다. 이메일 인증 후 로그인해주세요.');

            // 로그인 페이지로 이동
            router.push('/login');
        } catch (err: any) {
            console.error('회원가입 에러:', err);

            // 에러 메시지 처리
            if (err.message.includes('email') || err.message.includes('already')) {
                setError('이미 사용 중인 이메일입니다.');
            } else if (err.message.includes('password')) {
                setError('비밀번호는 최소 6자 이상이어야 합니다.');
            } else {
                setError(err.message || '회원가입 중 오류가 발생했습니다');
            }
        } finally {
            setLoading(false);
        }
    };

    const openTermsModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsTermsModalOpen(true);
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
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                            {error}
                        </div>
                    )}

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
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    {/* 이름 입력 */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="이름을 입력하세요."
                            value={formData.name}
                            onChange={handleChange}
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
                                autoComplete="new-password"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="비밀번호를 입력하세요."
                                value={formData.password}
                                onChange={handleChange}
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
                                value={formData.confirmPassword}
                                onChange={handleChange}
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

                    {/* 이용약관 동의 */}
                    <div className="flex items-center">
                        <input
                            id="agreeTerms"
                            name="agreeTerms"
                            type="checkbox"
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-700">
                            <span>이용약관에 동의합니다</span>
                            <button
                                onClick={openTermsModal}
                                className="ml-1 text-blue-500 hover:text-blue-600 underline"
                            >
                                (보기)
                            </button>
                        </label>
                    </div>

                    {/* 회원가입 버튼 */}
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
                            {loading ? '처리 중...' : '회원가입'}
                        </button>
                    </div>
                </form>

                {/* 로그인 링크 */}
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        이미 계정이 있으신가요?{' '}
                        <Link href="/login" className="text-blue-500 hover:text-blue-600 font-medium">
                            로그인
                        </Link>
                    </p>
                </div>

                {/* 간편 로그인 */}
                <SocialLoginButtons mode="register" />
            </div>

            {/* 이용약관 모달 */}
            <TermsModal
                isOpen={isTermsModalOpen}
                onClose={() => setIsTermsModalOpen(false)}
            />
        </div>
    );
}