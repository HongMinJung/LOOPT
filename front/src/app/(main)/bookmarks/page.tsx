// app/(main)/bookmarks/page.tsx
export default function BookmarksPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">북마크</h1>
            <p className="text-gray-600">저장한 모든 북마크를 확인할 수 있습니다.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h2 className="text-lg font-semibold">Stack Over Trio</h2>
                    <p className="text-sm text-gray-500 mt-2">
                        Stack Over Trio 스터디 그룹에 대한 정보와 자료를 확인하세요.
                    </p>
                    <a href="/bookmarks/stack-over-trio" className="text-blue-600 text-sm mt-3 inline-block">
                        자세히 보기 →
                    </a>
                </div>

                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h2 className="text-lg font-semibold">노부자 스터디</h2>
                    <p className="text-sm text-gray-500 mt-2">
                        노부자 스터디 그룹의 공부 자료와 일정을 확인하세요.
                    </p>
                    <a href="/bookmarks/noble-study" className="text-blue-600 text-sm mt-3 inline-block">
                        자세히 보기 →
                    </a>
                </div>
            </div>
        </div>
    );
}