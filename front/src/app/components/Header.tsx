// app/components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface User {
    name: string;
    email: string;
    image?: string;
}

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [user, setUser] = useState<User | null>(null);
    const pathname = usePathname();

    // 임시 로그인 시뮬레이션
    useEffect(() => {
        // 실제로는 API 호출이나 상태 관리 라이브러리를 사용하게 됩니다
        const mockUser = {
            name: 'StackOverTrio',
            email: 'stack@example.com',
            image: 'H'
        };
        setUser(mockUser);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // 검색 기능 구현
        console.log('검색어:', searchQuery);
    };

    return (
        <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
            <div className="max-w mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* 로고 */}
                    <div className="flex-shrink-0">
                        <Link href="/study-room" className="text-blue-500 text-2xl font-bold">
                            LOOPT
                        </Link>
                    </div>

                    {/* 검색창 */}
                    <div className="flex-1 mx-8">
                        <form onSubmit={handleSearch} className="w-full max-w-lg mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="검색어를 입력하세요."
                                    className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* 사용자 프로필 */}
                    <div className="flex items-center space-x-4">
                        {user ? (
                            <div className="flex items-center">
                                <div className="flex items-center space-x-2">
                                    <div className="relative group">
                                        <button className="flex items-center space-x-2">
                                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                                                {user.image || user.name.charAt(0)}
                                            </div>
                                            <span className="text-gray-700">{user.name}</span>
                                            <svg
                                                className="h-5 w-5 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                ></path>
                                            </svg>
                                        </button>
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                            <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                프로필
                                            </Link>
                                            <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                설정
                                            </Link>
                                            <button className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100">
                                                로그아웃
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link href="/login" className="text-blue-500 hover:text-blue-600">
                                로그인
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}