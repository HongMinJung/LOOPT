// app/layout.tsx
import './globals.css';
import { pretendard } from '@/app/fonts';
import { ThemeProvider } from '@/context/ThemeContext';
import AuthProvider from '@/context/AuthContext';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LOOPT - 스터디 플랫폼',
  description: 'LOOPT와 함께 성장하세요',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={pretendard.className}>
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}