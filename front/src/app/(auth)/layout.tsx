// app/(auth)/layout.tsx - 인증 레이아웃
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '로그인 | 내 앱',
    description: '내 앱에 로그인 또는 회원가입하세요',
};

export default function AuthLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                    {children}
                </div>
            </div>
        </div>
    );
}