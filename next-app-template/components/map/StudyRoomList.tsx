'use client';

import { Stack, Paper, Text, Group, Badge } from '@mantine/core';
import { IconUsers, IconMapPin } from '@tabler/icons-react';

export function StudyRoomList() {
  return (
    <Stack gap="md">
      {[1, 2, 3, 4].map((i) => (
        <Paper key={i} shadow="xs" p="md" withBorder>
          <Group justify="space-between" mb="xs">
            <Text fw={500}>알고리즘 스터디 {i}</Text>
            <Badge color="blue">2km</Badge>
          </Group>
          <Group gap="xs" mb="xs">
            <IconUsers size={16} />
            <Text size="sm">4/6명</Text>
            <IconMapPin size={16} />
            <Text size="sm">서울 강남구</Text>
          </Group>
          <Text size="sm" c="dimmed" lineClamp={2}>
            매주 알고리즘 문제를 함께 풀고 토론하는 스터디입니다.
          </Text>
        </Paper>
      ))}
    </Stack>
  );
} 