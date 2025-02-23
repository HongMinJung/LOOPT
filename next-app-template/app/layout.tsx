import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { AppShell } from '@/components/layout/AppShell';
import { StudyRoomProvider } from '@/contexts/StudyRoomContext';

export const metadata = {
  title: 'LOOPT - 스터디 관리 플랫폼',
  description: '위치 기반 스터디 관리 플랫폼',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <StudyRoomProvider>
            <AppShell>{children}</AppShell>
          </StudyRoomProvider>
        </MantineProvider>
      </body>
    </html>
  );
}