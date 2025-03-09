// app/(main)/stats/page.tsx
export default function StatsPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">학습 진도 관리</h1>
            <p className="text-gray-600 mb-6">나의 학습 활동과 진도를 확인할 수 있습니다.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-700">주간 학습 시간</h3>
                    <p className="text-3xl font-bold mt-2">12.5시간</p>
                    <p className="text-sm text-green-600 mt-1">+2.3시간 (전주 대비)</p>
                </div>

                <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-700">학습 일수</h3>
                    <p className="text-3xl font-bold mt-2">5일</p>
                    <p className="text-sm text-green-600 mt-1">+1일 (전주 대비)</p>
                </div>

                <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-700">완료한 과제</h3>
                    <p className="text-3xl font-bold mt-2">8개</p>
                    <p className="text-sm text-yellow-600 mt-1">-1개 (전주 대비)</p>
                </div>
            </div>

            <div className="bg-white rounded-lg border p-4 shadow-sm">
                <h3 className="text-lg font-medium text-gray-700 mb-4">진행 중인 학습</h3>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">리액트 기초 마스터하기</span>
                            <span className="text-sm text-gray-500">70%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Next.js 고급 과정</span>
                            <span className="text-sm text-gray-500">45%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">타입스크립트 심화</span>
                            <span className="text-sm text-gray-500">20%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}