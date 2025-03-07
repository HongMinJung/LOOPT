'use client';

import { MantineProvider } from '@mantine/core';
import { AppShell } from '@/components/layout/AppShell';
import { theme } from '@/theme';
import { StudyRoomProvider } from '@/contexts/StudyRoomContext';

export function MantineClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme}>
      <StudyRoomProvider>
        <AppShell>
          {children}
        </AppShell>
      </StudyRoomProvider>
    </MantineProvider>
  );
} 