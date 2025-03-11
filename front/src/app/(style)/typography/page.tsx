export default function TypographyPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">타이포그래피</h1>

            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4">제목</h2>
                <div className="space-y-4">
                    <div>
                        <h1 className="text-4xl font-bold">H1 제목</h1>
                        <p className="text-sm text-gray-500 mt-1">text-4xl, font-bold</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">H2 제목</h2>
                        <p className="text-sm text-gray-500 mt-1">text-3xl, font-bold</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">H3 제목</h3>
                        <p className="text-sm text-gray-500 mt-1">text-2xl, font-semibold</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold">H4 제목</h4>
                        <p className="text-sm text-gray-500 mt-1">text-xl, font-semibold</p>
                    </div>
                    <div>
                        <h5 className="text-lg font-medium">H5 제목</h5>
                        <p className="text-sm text-gray-500 mt-1">text-lg, font-medium</p>
                    </div>
                    <div>
                        <h6 className="text-base font-medium">H6 제목</h6>
                        <p className="text-sm text-gray-500 mt-1">text-base, font-medium</p>
                    </div>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4">본문</h2>
                <div className="space-y-4">
                    <div>
                        <p className="text-base">기본 본문 텍스트입니다. 이 텍스트는 일반적인 단락에 사용됩니다.</p>
                        <p className="text-sm text-gray-500 mt-1">text-base</p>
                    </div>
                    <div>
                        <p className="text-sm">작은 본문 텍스트입니다. 부가 정보나 캡션에 사용됩니다.</p>
                        <p className="text-sm text-gray-500 mt-1">text-sm</p>
                    </div>
                    <div>
                        <p className="text-xs">아주 작은 본문 텍스트입니다. 각주나 법적 정보에 사용됩니다.</p>
                        <p className="text-sm text-gray-500 mt-1">text-xs</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-4">특수 텍스트</h2>
                <div className="space-y-4">
                    <div>
                        <p className="text-base font-bold">굵은 텍스트</p>
                        <p className="text-sm text-gray-500 mt-1">font-bold</p>
                    </div>
                    <div>
                        <p className="text-base italic">기울임 텍스트</p>
                        <p className="text-sm text-gray-500 mt-1">italic</p>
                    </div>
                    <div>
                        <p className="text-base underline">밑줄 텍스트</p>
                        <p className="text-sm text-gray-500 mt-1">underline</p>
                    </div>
                    <div>
                        <p className="text-base line-through">취소선 텍스트</p>
                        <p className="text-sm text-gray-500 mt-1">line-through</p>
                    </div>
                </div>
            </section>
        </div>
    );
}