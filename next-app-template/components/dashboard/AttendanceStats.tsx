'use client';

import { Paper, Title, Text, Group, Stack, Progress } from '@mantine/core';

const monthlyData = [
  { month: '1월', attendance: 85 },
  { month: '2월', attendance: 90 },
  { month: '3월', attendance: 88 },
  { month: '4월', attendance: 92 }
];

export function AttendanceStats() {
  return (
    <Paper shadow="xs" p="lg" radius="md">
      <Title order={3} mb="md">출석 통계</Title>
      
      <Stack gap="md">
        {monthlyData.map((item) => (
          <div key={item.month}>
            <Group justify="space-between" mb="xs">
              <Text size="sm">{item.month}</Text>
              <Text size="sm">{item.attendance}%</Text>
            </Group>
            <Progress 
              value={item.attendance} 
              color="blue"
              size="md"
            />
          </div>
        ))}
      </Stack>

      <Group mt="xl">
        <div>
          <Text c="dimmed" size="sm">평균 출석률</Text>
          <Text fw={700} size="xl">89%</Text>
        </div>
      </Group>
    </Paper>
  );
} 