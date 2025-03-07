import '@mantine/core/styles.css';
import { MantineClientProvider } from '@/components/providers/MantineClientProvider';

export const metadata = {
  title: 'LOOPT - 스터디 관리 플랫폼',
  description: '위치 기반 스터디 관리 플랫폼',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head />
      <body>
        <MantineClientProvider>
          {children}
        </MantineClientProvider>
      </body>
    </html>
  );
}