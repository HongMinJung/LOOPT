'use client';

import { Paper, Title, Text, Group } from '@mantine/core';
import { BarChart } from '@mantine/charts';

const data = [
  { month: '1월', attendance: 85 },
  { month: '2월', attendance: 92 },
  { month: '3월', attendance: 88 },
  { month: '4월', attendance: 95 },
];

export function AttendanceStats() {
  return (
    <Paper shadow="xs" p="lg" radius="md">
      <Title order={3} mb="md">출석 통계</Title>
      
      <BarChart
        h={200}
        data={data}
        dataKey="month"
        series={[{ name: 'attendance', color: 'blue' }]}
        tickLine="y"
      />
      
      <Group mt="md" justify="space-between">
        <div>
          <Text size="sm" c="dimmed">평균 출석률</Text>
          <Text fw={700}>90%</Text>
        </div>
        <div>
          <Text size="sm" c="dimmed">연속 출석</Text>
          <Text fw={700}>7일</Text>
        </div>
        <div>
          <Text size="sm" c="dimmed">이번 달 출석</Text>
          <Text fw={700}>15/20일</Text>
        </div>
      </Group>
    </Paper>
  );
} 