import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '대시보드',
    description: '내 앱 대시보드',
};

export default function DashboardPage() {

    const activity = [
        { id: 1, type: 'join', user: '홍길동', target: '리액트 마스터 클래스', time: '10분 전' },
        { id: 2, type: 'comment', user: '김철수', target: '알고리즘 스터디', time: '1시간 전' },
        { id: 3, type: 'complete', user: '이영희', target: '자바스크립트 과제 3', time: '3시간 전' },
        { id: 4, type: 'schedule', user: '관리자', target: '정기 미팅', time: '어제' },
        { id: 5, type: 'join', user: '박민수', target: '파이썬 데이터 분석', time: '어제' },
    ];
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">대시보드</h1>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    마지막 업데이트: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 통계 카드 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                        <div className="text-3xl mr-4">👥</div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">총 사용자</p>
                            <p className="text-2xl font-bold">1,234</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                        <div className="text-3xl mr-4">📚</div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">활성 스터디</p>
                            <p className="text-2xl font-bold">42</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                        <div className="text-3xl mr-4">📅</div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">이번 주 일정</p>
                            <p className="text-2xl font-bold">8</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                        <div className="text-3xl mr-4">✅</div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">완료된 과제</p>
                            <p className="text-2xl font-bold">23/31</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-medium mb-4">최근 활동</h3>
                    <div className="space-y-4">
                        {activity.map(activity => (
                            <div key={activity.id} className="flex items-start pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0">
                                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 flex items-center justify-center mr-3">
                                    {activity.type === 'join' && '👋'}
                                    {activity.type === 'comment' && '💬'}
                                    {activity.type === 'complete' && '✅'}
                                    {activity.type === 'schedule' && '📅'}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm">
                                        <span className="font-medium">{activity.user}</span>님이
                                        {activity.type === 'join' && <span> <span className="font-medium">{activity.target}</span>에 참여했습니다.</span>}
                                        {activity.type === 'comment' && <span> <span className="font-medium">{activity.target}</span>에 댓글을 남겼습니다.</span>}
                                        {activity.type === 'complete' && <span> <span className="font-medium">{activity.target}</span>을(를) 완료했습니다.</span>}
                                        {activity.type === 'schedule' && <span> <span className="font-medium">{activity.target}</span>을(를) 예약했습니다.</span>}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 text-center">
                        <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                            모든 활동 보기
                        </button>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-medium mb-4">빠른 작업</h3>
                    <div className="space-y-3">
                        <button className="w-full flex items-center justify-between p-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                            <span>새 스터디 만들기</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>

                        <button className="w-full flex items-center justify-between p-3 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 transition-colors">
                            <span>일정 관리</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </button>

                        <button className="w-full flex items-center justify-between p-3 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 transition-colors">
                            <span>과제 확인</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </button>

                        <button className="w-full flex items-center justify-between p-3 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 transition-colors">
                            <span>친구 찾기</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="text-sm font-medium mb-3">최근 스터디</h4>
                        <div className="space-y-2">
                            {[
                                { id: 1, name: '자바스크립트 스터디', members: 12 },
                                { id: 2, name: '리액트 마스터 클래스', members: 8 },
                                { id: 3, name: '알고리즘 문제 풀이', members: 15 }
                            ].map(study => (
                                <a key={study.id} href={`/study/${study.id}`} className="flex items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full flex items-center justify-center mr-3 text-xs">
                                        {study.name.substring(0, 2)}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">{study.name}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{study.members}명 참여 중</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}