'use client';

import { Paper, Title } from '@mantine/core';
import { MapView } from '@/components/map/MapView';

export function StudyMap() {
  return (
    <Paper shadow="xs" p="lg" radius="md">
      <Title order={3} mb="md">스터디 위치</Title>
      <div style={{ height: 300 }}>
        <MapView />
      </div>
    </Paper>
  );
} 