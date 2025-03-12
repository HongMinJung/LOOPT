// app/style/layout.tsx
import React from 'react';
import Link from 'next/link';

export default function StyleGuideLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            <aside className="w-64 bg-gray-100 p-6">
                <h1 className="text-xl font-bold mb-6">스타일 가이드</h1>
                <nav className="space-y-2">
                    <Link href="/style-guide/typography" className="block hover:text-blue-600">타이포그래피</Link>
                    <Link href="/style-guide/color" className="block hover:text-blue-600">컬러</Link>
                    <Link href="/style-guide/button" className="block hover:text-blue-600">버튼</Link>
                    <Link href="/style-guide/input" className="block hover:text-blue-600">인풋</Link>
                    <Link href="/style-guide/badge" className="block hover:text-blue-600">뱃지</Link>
                </nav>
            </aside>
            <main className="flex-1 p-10">
                {children}
            </main>
        </div>
    );
}