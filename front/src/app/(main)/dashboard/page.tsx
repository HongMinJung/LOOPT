import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '대시보드',
    description: '내 앱 대시보드',
};

export default function DashboardPage() {
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
                {/* 더 많은 통계 카드... */}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-medium mb-4">최근 활동</h3>
                    {/* 활동 목록... */}
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-medium mb-4">빠른 작업</h3>
                    {/* 빠른 작업 버튼들... */}
                </div>
            </div>
        </div>
    );
}