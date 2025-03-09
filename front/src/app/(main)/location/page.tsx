// app/(main)/location/page.tsx
export default function LocationPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">위치 기반 스터디</h1>
            <p className="text-gray-600 mb-6">내 주변의 스터디 그룹과 스터디 장소를 찾아보세요.</p>

            <div className="rounded-lg border bg-white p-4 shadow-sm mb-6">
                <div className="flex items-center mb-4">
                    <input
                        type="text"
                        placeholder="위치 검색 (예: 강남역, 홍대입구)"
                        className="flex-1 border rounded-md px-4 py-2"
                    />
                    <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md">
                        검색
                    </button>
                </div>

                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">지도가 이곳에 표시됩니다.</p>
                </div>
            </div>

            <h2 className="text-xl font-semibold mb-3">주변 스터디 모임</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg bg-white p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-medium">JavaScript 스터디</h3>
                    <p className="text-sm text-gray-500 mt-1">강남역 2번 출구, 카페</p>
                    <div className="mt-2 flex justify-between items-center">
                        <span className="text-sm text-gray-600">매주 화/목 19:00</span>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
              2.1km 거리
            </span>
                    </div>
                </div>

                <div className="border rounded-lg bg-white p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-medium">React Native 모임</h3>
                    <p className="text-sm text-gray-500 mt-1">선릉역, 공유 오피스</p>
                    <div className="mt-2 flex justify-between items-center">
                        <span className="text-sm text-gray-600">매주 토 14:00</span>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
              3.5km 거리
            </span>
                    </div>
                </div>

                <div className="border rounded-lg bg-white p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-medium">알고리즘 스터디</h3>
                    <p className="text-sm text-gray-500 mt-1">역삼역, 스터디 카페</p>
                    <div className="mt-2 flex justify-between items-center">
                        <span className="text-sm text-gray-600">매주 월/수/금 20:00</span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
              4.7km 거리
            </span>
                    </div>
                </div>

                <div className="border rounded-lg bg-white p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-medium">Python 데이터 분석</h3>
                    <p className="text-sm text-gray-500 mt-1">삼성역, 도서관</p>
                    <div className="mt-2 flex justify-between items-center">
                        <span className="text-sm text-gray-600">매주 일 10:00</span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
              5.2km 거리
            </span>
                    </div>
                </div>
            </div>
        </div>
    );
}