import { Container, Grid, Title } from '@mantine/core';
import { StudyProgress } from '@/components/dashboard/StudyProgress';
import { AttendanceStats } from '@/components/dashboard/AttendanceStats';
import { UpcomingStudies } from '@/components/dashboard/UpcomingStudies';
import { StudyMap } from '@/components/dashboard/StudyMap';

export default function DashboardPage() {
  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="xl">대시보드</Title>
      
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <StudyProgress />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <AttendanceStats />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <UpcomingStudies />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <StudyMap />
        </Grid.Col>
      </Grid>
    </Container>
  );
} 