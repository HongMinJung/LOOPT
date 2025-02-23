'use client';

import { Container, Title, Grid, Button, Group } from '@mantine/core';
import { StudyRoomCard } from '@/components/study-room/StudyRoomCard';
import Link from 'next/link';
import { useStudyRooms } from '@/contexts/StudyRoomContext';

export default function StudyRoomsPage() {
  const { studyRooms } = useStudyRooms();

  return (
    <Container size="lg" py="xl">
      <Group justify="space-between" mb="xl">
        <Title order={1}>스터디룸</Title>
        <Button component={Link} href="/study-rooms/create">
          새 스터디룸 만들기
        </Button>
      </Group>
      
      <Grid>
        {studyRooms.map((studyRoom) => (
          <Grid.Col key={studyRoom.id} span={{ base: 12, sm: 6, md: 4 }}>
            <StudyRoomCard studyRoom={studyRoom} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
} 