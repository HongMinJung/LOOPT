'use client';

import { Container, Title } from '@mantine/core';
import { CreateStudyRoomForm } from '@/components/study-room/CreateStudyRoomForm';

export default function CreateStudyRoomPage() {
  return (
    <Container size="md" py="xl">
      <Title order={1} mb="xl">새 스터디룸 만들기</Title>
      <CreateStudyRoomForm />
    </Container>
  );
} 