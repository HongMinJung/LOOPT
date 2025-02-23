'use client';

import { useState } from 'react';
import { Paper, Title, Button, Text, Group, Stack, Progress } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

export function AttendanceCheck() {
  const [loading, setLoading] = useState(false);
  const attendanceRate = 85; // 예시 출석률

  const handleAttendance = async () => {
    setLoading(true);
    // TODO: 출석체크 로직 구현
    setLoading(false);
  };

  return (
    <Paper shadow="xs" p="lg" radius="md">
      <Stack>
        <Title order={3}>출석체크</Title>
        
        <Group>
          <Stack style={{ flex: 1 }}>
            <Text size="sm">이번 달 출석률</Text>
            <Progress value={attendanceRate} size="xl" />
            <Text ta="center">{attendanceRate}%</Text>
          </Stack>
        </Group>

        <Group grow>
          <Button
            leftSection={<IconCheck size={16} />}
            color="green"
            onClick={handleAttendance}
            loading={loading}
          >
            출석하기
          </Button>
          <Button
            leftSection={<IconX size={16} />}
            variant="light"
            color="red"
          >
            결석하기
          </Button>
        </Group>
      </Stack>
    </Paper>
  );
} 