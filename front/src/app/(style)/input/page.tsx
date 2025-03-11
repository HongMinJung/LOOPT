export default function InputPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">인풋</h1>

            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4">기본 인풋</h2>
                <div className="max-w-md">
                    <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="example@email.com"
                    />
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4">인풋 상태</h2>
                <div className="space-y-6 max-w-md">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">기본 상태</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="기본 인풋"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">비활성화 상태</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500 cursor-not-allowed"
                            placeholder="비활성화 상태"
                            disabled
                        />
                        <p className="mt-1 text-xs text-gray-500">disabled, bg-gray-100, text-gray-500, cursor-not-allowed</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-red-500 mb-1">오류 상태</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-red-500 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                            placeholder="오류 상태"
                        />
                        <p className="mt-1 text-xs text-red-500">유효한 값을 입력해주세요.</p>
                    </div>

                    {/*<div>*/}
                    {/*    <label className="block text-sm font-medium text-green-600 mb-1">성공 상태</label>*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        className="w-full px-3 py-2 border border-green-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"*/}
                    {/*        placeholder="성공 상태"*/}
                    {/*        value="올바른 형식"*/}
                    {/*        readOnly*/}
                    {/*    />*/}
                    {/*    <p className="mt-1 text-xs text-green-600">유효한 입력값입니다!</p>*/}
                    {/*</div>*/}
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4">다양한 인풋 타입</h2>
                <div className="space-y-6 max-w-md">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">텍스트</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="일반 텍스트 입력"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="비밀번호 입력"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="example@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">숫자</label>
                        <input
                            type="number"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="숫자 입력"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">텍스트 영역</label>
                        <textarea
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none"
                            placeholder="여러 줄 텍스트 입력"
                            rows={4}

                        ></textarea>
                    </div>
                </div>
            </section>
        </div>
    );
}