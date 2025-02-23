'use client';

import { Paper, Title, RingProgress, Text, Group, Stack } from '@mantine/core';

export function StudyProgress() {
  return (
    <Paper shadow="xs" p="lg" radius="md">
      <Title order={3} mb="md">스터디 진행 현황</Title>
      
      <Group align="center" grow>
        <RingProgress
          size={180}
          thickness={20}
          sections={[
            { value: 40, color: 'blue' },
            { value: 30, color: 'cyan' },
            { value: 20, color: 'teal' },
          ]}
          label={
            <Text ta="center" size="xl" fw={700}>
              90%
            </Text>
          }
        />
        
        <Stack gap="xs">
          <Group>
            <div style={{ width: 12, height: 12, backgroundColor: 'blue', borderRadius: '50%' }} />
            <Text size="sm">완료된 과제 (40%)</Text>
          </Group>
          <Group>
            <div style={{ width: 12, height: 12, backgroundColor: 'cyan', borderRadius: '50%' }} />
            <Text size="sm">진행중 (30%)</Text>
          </Group>
          <Group>
            <div style={{ width: 12, height: 12, backgroundColor: 'teal', borderRadius: '50%' }} />
            <Text size="sm">예정된 과제 (20%)</Text>
          </Group>
        </Stack>
      </Group>
    </Paper>
  );
} 