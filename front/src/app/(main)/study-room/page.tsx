"use client"

import {useState} from "react";
import {cn} from "@/lib/utils";

interface StudyRoom {
    id: number;
    type: string;
    title: string;
    description: string;
    createdBy: string;
    members: number;
    maxMembers: number;
    views: number;
    tags: string[];
    bookmarked?: boolean;
}

export default function StudyRoomPage() {

    // 샘플데이터
    const [studyRooms, setStudyRooms] = useState<StudyRoom[]>([
        /*
        {
        id:,
        type: '',
        title:'',
        description:'',
        createdBy: ''
        members:,
        maxMembers:,
        views:,
        tags: []
        }
        */
        {
            id: 1,
            type: '알고리즘',
            title: '알로리즘 스터디',
            description: '매주 알고리즘 문제를 함께 풀고 토론하는 스터디입니다.',
            createdBy: '도레미',
            members: 2,
            maxMembers: 1000,
            views: 130,
            tags: ['취업', '개발자', '웹']
        },
        {
            id: 2,
            type: '알고리즘',
            title: '알로리즘 스터디',
            description: '매주 알고리즘 문제를 함께 풀고 토론하는 스터디입니다.',
            createdBy: '도레미',
            members: 2,
            maxMembers: 1000,
            views: 130,
            tags: ['취업', '개발자', '웹'],
            bookmarked: true,
        },
        {
            id: 3,
            type: '알고리즘',
            title: '알로리즘 스터디',
            description: '매주 알고리즘 문제를 함께 풀고 토론하는 스터디입니다.',
            createdBy: '도레미',
            members: 2,
            maxMembers: 1000,
            views: 130,
            tags: ['취업', '개발자', '웹']
        },
        {
            id: 4,
            type: '알고리즘',
            title: '알로리즘 스터디',
            description: '매주 알고리즘 문제를 함께 풀고 토론하는 스터디입니다.',
            createdBy: '도레미',
            members: 2,
            maxMembers: 1000,
            views: 130,
            tags: ['취업', '개발자', '웹']
        },
        {
            id: 5,
            type: '알고리즘',
            title: '알로리즘 스터디',
            description: '매주 알고리즘 문제를 함께 풀고 토론하는 스터디입니다.',
            createdBy: '도레미',
            members: 2,
            maxMembers: 1000,
            views: 130,
            tags: ['취업', '개발자', '웹']
        },
        {
            id: 6,
            type: '알고리즘',
            title: '알로리즘 스터디',
            description: '매주 알고리즘 문제를 함께 풀고 토론하는 스터디입니다.',
            createdBy: '도레미',
            members: 2,
            maxMembers: 1000,
            views: 130,
            tags: ['취업', '개발자', '웹']
        }
    ]);
    const handleBookMark = (id: number) => {
        setStudyRooms(prevRooms =>
            prevRooms.map(room => room.id === id ? {...room, bookmarked: !room.bookmarked} : room))
    }
    const handleShare = (id: number) => {
        console.log('id', id)
    }
    return (
        <div className="space-y-6">
            <div className={cn(
                'flex',
                'justify-between',
                'items-start',
            )}>
                <h1 className="text-2xl font-bold mb-4">스터디 둘러보기</h1>
                <p className="text-gray-600">이곳에서 다양한 스터디를 찾아볼 수 있습니다.</p>
            </div>

            <div className={cn(
                'grid',
                'grid-cols-1',
                'md:grid-cols-4',
                'sm:grid-cols-3',
                'gap-6'
            )}>
                {studyRooms.map((study) => (
                    <div
                        key={study.id}
                        className={cn(
                            'bg-white',
                            'rounded-lg',
                            'p-4',
                            'border',
                            'border-gray-20',
                            'hover:shadow-md',
                            'transition-shadow',
                            'relative'
                        )}>
                        <div className={cn(
                            'flex',
                            'justify-between',
                            'items-start',
                            'mb-2'
                        )}>
                            {/* 타입 뱃지 */}
                            <span className={cn(
                                'px-2',
                                'py-1',
                                'text-xs',
                                'bg-blue-100',
                                'text-blue-600',
                                'rounded-md'
                            )}>
                                {study.type}
                            </span>
                            <div className={cn(
                                'flex',
                                'space-x-2'
                            )}>
                                {/* 북마크 */}
                                <button
                                    className={`text-gray-400 hover:text-yellow-600' ${study.bookmarked ? 'text-yellow-500' : ''}`}
                                    onClick={() => handleBookMark(study.id)}
                                    aria-label={study.bookmarked ? "북마크 제거" : "북마크 추가"}>
                                    <svg className="w-5 h-5" fill={study.bookmarked ? "currentColor" : "none"}
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                                    </svg>
                                </button>
                                {/* 공유 */}
                                <button
                                    onClick={() => handleShare(study.id)}
                                    className={`text-gray-400 hover:text-yellow-600`}
                                    aria-label="공유 하기"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                                    </svg>

                                </button>
                            </div>
                        </div>
                        {/* 타이틀 */}
                        <h2 className={cn(
                            'text-lg',
                            'font-medium',
                            'mb-2'
                        )}>
                            {study.title}</h2>
                        {/* 설명 */}
                        <p className={cn(
                            'text-gray-600',
                            'text-sm',
                            'mb-4'
                        )}>
                            {study.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}