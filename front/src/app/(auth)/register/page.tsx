// app/(auth)/register/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// 이용약관 모달 컴포넌트
interface TermsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="text-lg font-medium">이용약관</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-500"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-4 overflow-y-auto flex-1">
                    <h4 className="font-bold mb-3">제 1 장 총칙</h4>

                    <h5 className="font-medium mt-4 mb-2">제 1 조 (목적)</h5>
                    <p className="text-sm mb-3">
                        이 약관은 LOOPT(이하 "회사"라 함)가 제공하는 서비스의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                    </p>

                    <h5 className="font-medium mt-4 mb-2">제 2 조 (정의)</h5>
                    <p className="text-sm mb-3">
                        이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                    </p>
                    <ul className="list-disc pl-5 text-sm mb-3">
                        <li className="mb-1">"서비스"라 함은 회사가 제공하는 모든 서비스를 의미합니다.</li>
                        <li className="mb-1">"회원"이라 함은 회사의 서비스에 접속하여 이 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다.</li>
                        <li className="mb-1">"아이디(ID)"라 함은 회원의 식별과 서비스 이용을 위하여 회원이 정하고 회사가 승인하는 문자와 숫자의 조합을 의미합니다.</li>
                        <li className="mb-1">"비밀번호"라 함은 회원이 부여 받은 아이디와 일치되는 회원임을 확인하고 비밀보호를 위해 회원 자신이 정한 문자 또는 숫자의 조합을 의미합니다.</li>
                    </ul>

                    <h5 className="font-medium mt-4 mb-2">제 3 조 (약관의 게시와 개정)</h5>
                    <p className="text-sm mb-3">
                        1. 회사는 이 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.
                    </p>
                    <p className="text-sm mb-3">
                        2. 회사는 "약관의 규제에 관한 법률", "정보통신망 이용촉진 및 정보보호 등에 관한 법률" 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
                    </p>
                    <p className="text-sm mb-3">
                        3. 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 제1항의 방식에 따라 그 개정약관의 적용일자 30일 전부터 적용일자 전일까지 공지합니다.
                    </p>

                    <h4 className="font-bold mt-6 mb-3">제 2 장 서비스 이용계약</h4>

                    <h5 className="font-medium mt-4 mb-2">제 4 조 (이용계약의 체결)</h5>
                    <p className="text-sm mb-3">
                        1. 이용계약은 회원이 되고자 하는 자(이하 "가입신청자")가 약관의 내용에 대하여 동의를 한 다음 회원가입신청을 하고 회사가 이러한 신청에 대하여 승낙함으로써 체결됩니다.
                    </p>
                    <p className="text-sm mb-3">
                        2. 회사는 가입신청자의 신청에 대하여 서비스 이용을 승낙함을 원칙으로 합니다. 다만, 회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 사후에 이용계약을 해지할 수 있습니다.
                    </p>
                    <ul className="list-disc pl-5 text-sm mb-3">
                        <li className="mb-1">가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우</li>
                        <li className="mb-1">실명이 아니거나 타인의 명의를 이용한 경우</li>
                        <li className="mb-1">허위의 정보를 기재하거나, 회사가 요구하는 내용을 기재하지 않은 경우</li>
                        <li className="mb-1">가입신청자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하며 신청하는 경우</li>
                    </ul>

                    <h5 className="font-medium mt-4 mb-2">제 5 조 (개인정보의 보호 및 사용)</h5>
                    <p className="text-sm mb-3">
                        1. 회사는 관계 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는 관련 법령 및 회사의 개인정보 처리방침이 적용됩니다.
                    </p>
                    <p className="text-sm mb-3">
                        2. 회사는 회원의 개인정보를 회원이 동의한 목적과 범위 내에서만 사용하며, 회원의 동의 없이는 제3자에게 회원의 개인정보를 제공하지 않습니다.
                    </p>

                    <p className="text-sm mt-6 text-gray-500">
                        이용약관의 나머지 내용은 생략되었습니다. 전체 이용약관은 회사 웹사이트에서 확인하실 수 있습니다.
                    </p>
                </div>

                <div className="p-4 border-t">
                    <button
                        onClick={onClose}
                        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
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
            // 실제 회원가입 로직은 여기에 구현
            await new Promise(resolve => setTimeout(resolve, 1000)); // 모의 API 호출
            router.push('/login'); // 회원가입 후 로그인 페이지로 이동
        } catch (err: any) {
            setError(err.message || '회원가입 중 오류가 발생했습니다');
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
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
                <div className="mt-8">
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

            {/* 이용약관 모달 */}
            <TermsModal
                isOpen={isTermsModalOpen}
                onClose={() => setIsTermsModalOpen(false)}
            />
        </div>
    );
}