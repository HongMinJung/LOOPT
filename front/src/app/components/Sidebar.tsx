// app/components/Sidebar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FriendSection from "@/app/components/sidebar/FriendSection";
import BookmarksSection from "@/app/components/sidebar/BookmarksSection";
import StudyRoomSection from "@/app/components/sidebar/StudyRoomSection";

interface Friend {
    id: string;
    name: string;
    role: string;
    status: 'online' | 'offline' | 'away';
}

export default function Sidebar() {
    const pathname = usePathname();

    // 스터디룸 메뉴 아이템
    const studyMenuItems = [
        {
            id: '1',
            title: '스터디 둘러보기',
            href: '/study-room',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
            ),
        },
        {
            id: '2',
            title: '스터디 그룹 관리',
            href: '/my-studies',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
            ),
            badge: 3,
        },
        {
            id: '3',
            title: '위치 기반 스터디',
            href: '/location',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
            ),
        },
        {
            id: '4',
            title: '학습 진도 관리',
            href: '/stats',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
            ),
        },
        {
            id: '5',
            title: '일정 관리',
            href: '/calendar',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
            ),
        },
    ];
    // 북마크 데이터
    const bookmarks = [
        { id: '1', title: 'Stack Over Trio', href: '/bookmarks/stack-over-trio' },
        { id: '2', title: '노부자 스터디', href: '/bookmarks/noble-study' },
    ];

    // 친구 목록 더미 데이터
    const friends: Friend[] = [
        { id: '1', name: 'Jeremy', role: 'Software Developer', status: 'away' },
        { id: '2', name: 'SW', role: 'Software Developer', status: 'away' },
        { id: '3', name: '일성', role: 'Software Developer', status: 'away' },
        { id: '4', name: 'MEANLUNG', role: 'Software Developer', status: 'online' },
    ];

    return (
        <aside className="w-64 h-full bg-white border-r border-gray-200 shadow-md flex flex-col">
            {/* 스크롤 가능한 메인 콘텐츠 영역 */}
            <div className="flex-1 overflow-y-auto">
                <StudyRoomSection menuItems={studyMenuItems} />

                <BookmarksSection bookmarks={bookmarks} />


                <FriendSection friends={friends} />
            </div>

            {/* 하단 고정 영역: 'sticky'와 'bottom-0'로 하단에 고정 */}
            <div className="sticky bottom-0 p-4 border-t border-gray-200 flex justify-between shadow-inner bg-gray-50 w-full">
                <button className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
                    </svg>
                    로그아웃
                </button>
                <button className="text-gray-600 hover:text-gray-900 transition-colors p-1 rounded-full hover:bg-gray-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </button>
            </div>
        </aside>
    );
}