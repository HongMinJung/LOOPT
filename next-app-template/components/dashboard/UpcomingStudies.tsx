'use client';

import { Paper, Title, Stack, Group, Text, Badge, ActionIcon } from '@mantine/core';
import { IconCalendar, IconMapPin, IconUsers, IconDotsVertical } from '@tabler/icons-react';

export function UpcomingStudies() {
  return (
    <Paper shadow="xs" p="lg" radius="md">
      <Title order={3} mb="md">예정된 스터디</Title>
      
      <Stack>
        {[1, 2, 3].map((i) => (
          <Paper key={i} withBorder p="md" radius="md">
            <Group justify="space-between" mb="xs">
              <Text fw={500}>알고리즘 스터디 {i}</Text>
              <Group gap="xs">
                <Badge color="blue">D-{i}</Badge>
                <ActionIcon variant="subtle" size="sm">
                  <IconDotsVertical size={16} />
                </ActionIcon>
              </Group>
            </Group>
            
            <Group gap="lg">
              <Group gap="xs">
                <IconCalendar size={16} />
                <Text size="sm">내일 오후 7:00</Text>
              </Group>
              <Group gap="xs">
                <IconMapPin size={16} />
                <Text size="sm">강남역 스터디카페</Text>
              </Group>
              <Group gap="xs">
                <IconUsers size={16} />
                <Text size="sm">4/6명</Text>
              </Group>
            </Group>
          </Paper>
        ))}
      </Stack>
    </Paper>
  );
} 