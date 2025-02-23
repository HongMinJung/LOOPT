'use client';

import { Container, Title, Grid, Paper, Group, Text, Button, Stack, Avatar } from '@mantine/core';
import { IconUsers, IconMapPin, IconCalendar } from '@tabler/icons-react';
import { AttendanceCheck } from '@/components/study-room/AttendanceCheck';
import { ChatRoom } from '@/components/chat/ChatRoom';

export default function StudyRoomDetailPage() {
  return (
    <Container size="lg" py="xl">
      <Grid>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Paper shadow="xs" p="lg" mb="lg">
            <Title order={1} mb="md">알고리즘 스터디</Title>
            <Group gap="xs" mb="md">
              <IconUsers size={18} />
              <Text>4/6명</Text>
              <IconMapPin size={18} />
              <Text>서울 강남구</Text>
              <IconCalendar size={18} />
              <Text>매주 화/목 오후 7시</Text>
            </Group>
            <Text>
              매주 알고리즘 문제를 함께 풀고 토론하는 스터디입니다.
              코딩 테스트 준비와 실력 향상을 목표로 합니다.
            </Text>
          </Paper>

          <Paper shadow="xs" p="lg" mb="lg">
            <AttendanceCheck />
          </Paper>

          <Paper shadow="xs" p="lg">
            <Title order={2} mb="md">채팅</Title>
            <ChatRoom />
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper shadow="xs" p="lg" mb="lg">
            <Title order={2} mb="md">스터디원</Title>
            <Stack>
              {[1, 2, 3, 4].map((i) => (
                <Group key={i}>
                  <Avatar radius="xl" />
                  <div style={{ flex: 1 }}>
                    <Text size="sm" fw={500}>사용자 {i}</Text>
                    <Text size="xs" c="dimmed">참여율 95%</Text>
                  </div>
                </Group>
              ))}
            </Stack>
          </Paper>

          <Button fullWidth>스터디 참여하기</Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
} 