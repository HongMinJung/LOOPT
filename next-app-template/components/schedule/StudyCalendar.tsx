'use client';

import { Paper, Title } from '@mantine/core';

export function StudyCalendar() {
  return (
    <Paper shadow="xs" p="lg" radius="md">
      <Title order={3} mb="md">스터디 캘린더</Title>
      <div style={{ height: 500 }}>
        {/* 캘린더 구현 필요 */}
        캘린더가 들어갈 영역입니다.
      </div>
    </Paper>
  );
} 