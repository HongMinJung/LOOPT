// app/components/Header.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [searchQuery, setSearchQuery] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // 검색 기능 구현
        console.log('검색어:', searchQuery);
        // 검색 페이지로 이동하거나 결과를 표시하는 로직 추가
    };

    const handleLogout = async () => {
        await signOut({ redirect: false });
        router.push('/login');
    };

    // 드롭다운 토글
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // 드롭다운 외부 클릭 시 닫기
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
            <div className="max-w mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* 로고 */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-blue-500 text-2xl font-bold">
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
                        {status === 'loading' ? (
                            // 로딩 상태
                            <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
                        ) : session?.user ? (
                            // 로그인된 상태
                            <div ref={dropdownRef} className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="flex items-center space-x-2 focus:outline-none"
                                    aria-expanded={isDropdownOpen}
                                    aria-haspopup="true"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 overflow-hidden">
                                        {session.user.image ? (
                                            <Image
                                                src={session.user.image}
                                                alt={session.user.name || ''}
                                                width={32}
                                                height={32}
                                                className="object-cover w-full h-full"
                                            />
                                        ) : (
                                            <span>{session.user.name?.charAt(0) || session.user.email?.charAt(0) || '?'}</span>
                                        )}
                                    </div>
                                    <span className="text-gray-700 hidden sm:inline-block">
                                        {session.user.name || session.user.email?.split('@')[0]}
                                    </span>
                                    <svg
                                        className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
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

                                {/* 드롭다운 메뉴 */}
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                                        <div className="px-4 py-2 border-b border-gray-100">
                                            <p className="text-sm font-medium text-gray-900">{session.user.name || '사용자'}</p>
                                            <p className="text-xs text-gray-500 truncate">{session.user.email}</p>
                                        </div>
                                        <Link
                                            href="/profile"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            프로필
                                        </Link>
                                        <Link
                                            href="/my-studies"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            내 스터디
                                        </Link>
                                        <Link
                                            href="/settings"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            설정
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 border-t border-gray-100"
                                        >
                                            로그아웃
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            // 로그인 안된 상태
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/login"
                                    className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    로그인
                                </Link>
                                <Link
                                    href="/register"
                                    className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium"
                                >
                                    회원가입
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}