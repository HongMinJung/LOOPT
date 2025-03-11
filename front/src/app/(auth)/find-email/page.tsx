// app/(auth)/find-email/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface FindEmailResult {
    email: string;
    joinDate: string;
}

export default function FindEmailPage() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<FindEmailResult | null>(null);
    const [error, setError] = useState('');

    // Supabase 클라이언트 초기화
    const supabase = createClientComponentClient();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Supabase에서 사용자 찾기
            // 참고: 기본 Auth 시스템은 전화번호로 직접 사용자를 찾는 기능이 없음
            // 따라서 users 테이블에서 조회해야 함
            const { data, error: searchError } = await supabase
                .from('users')
                .select('email, join_date')
                .eq('name', name)
                .eq('phone', phone.replace(/-/g, '')) // 하이픈 제거하여 검색
                .single();

            if (searchError || !data) {
                throw new Error('일치하는 정보를 찾을 수 없습니다.');
            }

            // 이메일 일부를 마스킹 처리
            const maskedEmail = maskEmail(data.email);

            setResult({
                email: maskedEmail,
                joinDate: new Date(data.join_date).toLocaleDateString()
            });
        } catch (err: any) {
            setError(err.message || '이메일을 찾는 중 오류가 발생했습니다');
        } finally {
            setLoading(false);
        }
    };

    // 이메일 마스킹 함수 (예: example@gmail.com -> exa***@gmail.com)
    const maskEmail = (email: string) => {
        const [localPart, domain] = email.split('@');
        let maskedLocalPart = localPart;

        if (localPart.length > 3) {
            maskedLocalPart = localPart.substring(0, 3) + '*'.repeat(localPart.length - 3);
        }

        return `${maskedLocalPart}@${domain}`;
    };

    // 전화번호 형식화 (010-1234-5678)
    const formatPhoneNumber = (value: string) => {
        const numbers = value.replace(/[^\d]/g, '');
        if (numbers.length <= 3) {
            return numbers;
        } else if (numbers.length <= 7) {
            return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
        } else {
            return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setPhone(formattedPhoneNumber);
    };

    return (
        <div className="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-white">
            <div className="w-full max-w-md space-y-8">
                {/* 로고 */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-blue-500">LOOPT</h1>
                    <p className="mt-2 text-sm text-gray-500">이메일을 잊으셨나요?</p>
                </div>

                {result ? (
                    <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-5 rounded-md">
                        <h2 className="text-lg font-medium mb-2">이메일 찾기 결과</h2>
                        <div className="space-y-3">
                            <p className="text-sm">
                                <span className="font-medium">이메일:</span> {result.email}
                            </p>
                            <p className="text-sm">
                                <span className="font-medium">가입일:</span> {result.joinDate}
                            </p>
                        </div>
                        <div className="flex justify-center space-x-4 mt-6">
                            <Link
                                href="/login"
                                className="text-blue-500 hover:text-blue-600 font-medium"
                            >
                                로그인
                            </Link>
                            <Link
                                href="/forgot-password"
                                className="text-blue-500 hover:text-blue-600 font-medium"
                            >
                                비밀번호 찾기
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
                            가입 시 입력한 이름과 전화번호를 입력하시면 이메일을 찾으실 수 있습니다.
                        </p>

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
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        {/* 전화번호 입력 */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">전화번호</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="전화번호를 입력하세요. (예: 010-1234-5678)"
                                value={phone}
                                onChange={handlePhoneChange}
                                maxLength={13} // 010-1234-5678 포맷에 맞게 최대 길이 설정
                            />
                        </div>

                        {/* 이메일 찾기 버튼 */}
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
                                {loading ? '처리 중...' : '이메일 찾기'}
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
                            <span>|</span>
                            <Link href="/forgot-password" className="hover:text-blue-500">
                                비밀번호 찾기
                            </Link>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}