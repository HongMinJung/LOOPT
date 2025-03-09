// app/(main)/calendar/page.tsx
export default function CalendarPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">일정 관리</h1>
            <p className="text-gray-600 mb-6">스터디 일정과 과제 마감일을 관리하세요.</p>

            <div className="flex mb-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
                    새 일정 추가
                </button>
                <div className="ml-auto flex space-x-2">
                    <button className="border px-3 py-1 rounded text-sm">오늘</button>
                    <button className="border px-3 py-1 rounded text-sm">주</button>
                    <button className="border px-3 py-1 rounded bg-gray-100 text-sm font-medium">월</button>
                    <button className="border px-3 py-1 rounded text-sm">연도</button>
                </div>
            </div>

            <div className="bg-white border rounded-lg shadow-sm">
                {/* 달력 헤더 */}
                <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-xl font-medium">2025년 3월</h2>
                    <div className="flex space-x-2">
                        <button className="p-1 rounded hover:bg-gray-100">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>
                        <button className="p-1 rounded hover:bg-gray-100">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* 요일 */}
                <div className="grid grid-cols-7 text-center border-b">
                    <div className="py-2 font-medium text-red-500">일</div>
                    <div className="py-2 font-medium">월</div>
                    <div className="py-2 font-medium">화</div>
                    <div className="py-2 font-medium">수</div>
                    <div className="py-2 font-medium">목</div>
                    <div className="py-2 font-medium">금</div>
                    <div className="py-2 font-medium text-blue-500">토</div>
                </div>

                {/* 달력 그리드 (간략화) */}
                <div className="grid grid-cols-7 text-sm">
                    {/* 첫번째 줄 */}
                    <div className="p-2 h-24 border-b border-r text-gray-400">23</div>
                    <div className="p-2 h-24 border-b border-r text-gray-400">24</div>
                    <div className="p-2 h-24 border-b border-r text-gray-400">25</div>
                    <div className="p-2 h-24 border-b border-r text-gray-400">26</div>
                    <div className="p-2 h-24 border-b border-r text-gray-400">27</div>
                    <div className="p-2 h-24 border-b border-r text-gray-400">28</div>
                    <div className="p-2 h-24 border-b text-gray-400">1</div>

                    {/* 두번째 줄 */}
                    <div className="p-2 h-24 border-b border-r">2</div>
                    <div className="p-2 h-24 border-b border-r">3</div>
                    <div className="p-2 h-24 border-b border-r">
                        4
                        <div className="mt-1 text-xs">
                            <div className="bg-blue-100 text-blue-800 p-1 rounded mb-1">알고리즘 스터디</div>
                        </div>
                    </div>
                    <div className="p-2 h-24 border-b border-r">5</div>
                    <div className="p-2 h-24 border-b border-r">6</div>
                    <div className="p-2 h-24 border-b border-r">7</div>
                    <div className="p-2 h-24 border-b">8</div>

                    {/* 세번째 줄 - 현재 날짜 표시 */}
                    <div className="p-2 h-24 border-b border-r">9</div>
                    <div className="p-2 h-24 border-b border-r bg-blue-50 font-medium text-blue-800">
                        10
                        <div className="mt-1 text-xs">
                            <div className="bg-red-100 text-red-800 p-1 rounded mb-1">과제 마감</div>
                            <div className="bg-green-100 text-green-800 p-1 rounded">JavaScript 스터디</div>
                        </div>
                    </div>
                    <div className="p-2 h-24 border-b border-r">11</div>
                    <div className="p-2 h-24 border-b border-r">12</div>
                    <div className="p-2 h-24 border-b border-r">13</div>
                    <div className="p-2 h-24 border-b border-r">14</div>
                    <div className="p-2 h-24 border-b">15</div>
                </div>
            </div>
        </div>
    );
}