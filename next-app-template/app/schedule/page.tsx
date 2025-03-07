'use client';

import { Container, Title, Grid } from '@mantine/core';
import { UpcomingStudies } from '@/components/dashboard/UpcomingStudies';
import { StudyCalendar } from '@/components/schedule/StudyCalendar';

export default function SchedulePage() {
  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="xl">일정 관리</Title>
      
      <Grid>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <StudyCalendar />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <UpcomingStudies />
        </Grid.Col>
      </Grid>
    </Container>
  );
} 