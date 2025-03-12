export default function ButtonPage() {
    return (
        <div>
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4">기본 버튼</h2>
                <div className="flex flex-wrap gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                        기본 버튼
                    </button>
                    <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded">
                        보조 버튼
                    </button>
                    <button className="bg-transparent hover:bg-gray-100 text-blue-600 font-medium py-2 px-4 rounded">
                        텍스트 버튼
                    </button>
                </div>
            </section>
            
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4">버튼 상태</h2>

                <div className="flex flex-wrap flex-row gap-6">

                    <div>
                        <h3 className="font-medium mb-3">기본</h3>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-blue-200 text-white font-medium py-2 px-4 rounded">
                                기본 상태
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium mb-3">호버</h3>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-blue-300 text-white font-medium py-2 px-4 rounded">
                                호버 상태
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">hover:bg-blue-700</p>
                    </div>
                    <div>
                        <h3 className="font-medium mb-3">활성 (클릭)</h3>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded">
                                활성 상태
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">active:bg-blue-800</p>
                    </div>

                    <div>
                        <h3 className="font-medium mb-3">비활성화</h3>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-gray-300 text-white font-medium py-2 px-4 rounded cursor-not-allowed">
                                비활성화 상태
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">opacity-70 cursor-not-allowed</p>
                    </div>

                    <div>
                        <h3 className="font-medium mb-3">로딩</h3>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                로딩 중...
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4">버튼 크기</h2>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-medium mb-3">대형</h3>
                        <div className="flex flex-wrap gap-4 items-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded text-lg">
                                대형 버튼
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">py-3 px-6 text-lg</p>
                    </div>

                    <div>
                        <h3 className="font-medium mb-3">중형 (기본)</h3>
                        <div className="flex flex-wrap gap-4 items-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                                중형 버튼
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">py-2 px-4 text-base</p>
                    </div>

                    <div>
                        <h3 className="font-medium mb-3">소형</h3>
                        <div className="flex flex-wrap gap-4 items-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded text-sm">
                                소형 버튼
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">py-1 px-3 text-sm</p>
                    </div>

                    <div>
                        <h3 className="font-medium mb-3">전체 너비</h3>
                        <div className="flex flex-wrap gap-4 w-full">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded w-full">
                                전체 너비 버튼
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">w-full</p>
                    </div>
                </div>
            </section>
        </div>
    );
}