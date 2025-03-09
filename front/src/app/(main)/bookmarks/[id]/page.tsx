// app/(main)/bookmarks/[id]/page.tsx
export default function BookmarkDetailPage({ params }: { params: { id: string } }) {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">북마크 상세 페이지</h1>
            <p className="text-gray-600">북마크 ID: {params.id}</p>

            {/* 북마크 ID에 따라 다른 콘텐츠 표시 */}
            {params.id === 'stack-over-trio' && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Stack Over Trio</h2>
                    <p>Stack Over Trio 스터디 그룹에 대한 북마크 정보입니다.</p>
                </div>
            )}

            {params.id === 'noble-study' && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">노부자 스터디</h2>
                    <p>노부자 스터디 그룹에 대한 북마크 정보입니다.</p>
                </div>
            )}
        </div>
    );
}