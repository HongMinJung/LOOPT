import Header from '@/app/components/Header';
import Sidebar from '@/app/components/Sidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '메인 레이아웃',
    description: '헤더, 사이드바, 푸터가 있는 메인 레이아웃',
};

export default function MainLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1 pt-16"> {/* pt-16은 헤더 높이에 맞게 조정 */}
                <div className="fixed top-16 left-0 h-[calc(100vh-4rem)]">
                    {/* 사이드바 고정: 헤더 높이(4rem)를 제외한 전체 높이로 설정 */}
                    <Sidebar />
                </div>
                <div className="ml-64 flex-1 w-full"> {/* 사이드바 너비에 맞게 margin 추가 (예: 사이드바가 64px 너비면 ml-64) */}
                {/*<div className="ml-64"> /!* 사이드바 너비에 맞게 margin 추가 (예: 사이드바가 64px 너비면 ml-64) *!/*/}
                    <main className="p-6 overflow-auto transition-all duration-200">
                        {children}
                    </main>
                </div>
            </div>
            {/*<Footer />*/}
        </div>
    );
}