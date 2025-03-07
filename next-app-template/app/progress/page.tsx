'use client';

import { Container, Title, Grid, Paper } from '@mantine/core';
import { StudyProgress } from '@/components/dashboard/StudyProgress';
import { AttendanceStats } from '@/components/dashboard/AttendanceStats';

export default function ProgressPage() {
  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="xl">학습 진도 관리</Title>
      
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <StudyProgress />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <AttendanceStats />
        </Grid.Col>
      </Grid>
    </Container>
  );
} 