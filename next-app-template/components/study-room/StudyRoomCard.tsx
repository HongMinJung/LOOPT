'use client';

import { Card, Text, Button, Group, Badge } from '@mantine/core';
import { IconUsers, IconMapPin } from '@tabler/icons-react';
import Link from 'next/link';
import { StudyRoom } from '@/store/studyRooms';

interface StudyRoomCardProps {
  studyRoom: StudyRoom;
}

export function StudyRoomCard({ studyRoom }: StudyRoomCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mb="xs">
        <Text fw={500}>{studyRoom.title}</Text>
        <Badge color="blue">{studyRoom.status === 'recruiting' ? '모집중' : '모집완료'}</Badge>
      </Group>

      <Text size="sm" c="dimmed" mb="md" lineClamp={2}>
        {studyRoom.description}
      </Text>

      <Group gap="xs" mb="md">
        <IconUsers size={16} />
        <Text size="sm">{studyRoom.currentMembers}/{studyRoom.maxMembers}명</Text>
        <IconMapPin size={16} />
        <Text size="sm">{studyRoom.location}</Text>
      </Group>

      <Button 
        component={Link} 
        href={`/study-rooms/${studyRoom.id}`} 
        variant="light" 
        fullWidth
      >
        자세히 보기
      </Button>
    </Card>
  );
} 