'use client';

import { Container, SimpleGrid, Paper, Text, Stack } from '@mantine/core';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const router = useRouter();

  const handleCardClick = (path: string) => {
    router.push(path);
  };

  return (
    <Container size="lg">
      <SimpleGrid cols={2} spacing="xl">
        <Paper
          shadow="xs"
          p="xl"
          onClick={() => handleCardClick('/study-rooms')}
          style={{ cursor: 'pointer' }}
        >
          <Stack>
            <div>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="#228BE6"/>
                <path d="M25.5 17.5C25.5 19.9853 23.4853 22 21 22C18.5147 22 16.5 19.9853 16.5 17.5C16.5 15.0147 18.5147 13 21 13C23.4853 13 25.5 15.0147 25.5 17.5Z" fill="white"/>
                <path d="M28 27.5C28 28.8807 24.8659 30 21 30C17.134 30 14 28.8807 14 27.5C14 26.1193 17.134 25 21 25C24.8659 25 28 26.1193 28 27.5Z" fill="white"/>
              </svg>
            </div>
            <Text fw={500}>스터디 그룹 관리</Text>
            <Text size="sm" c="dimmed">
              효율적인 스터디 그룹 관리와 멤버 관리 기능을 제공합니다.
            </Text>
          </Stack>
        </Paper>

        <Paper
          shadow="xs"
          p="xl"
          onClick={() => handleCardClick('/map')}
          style={{ cursor: 'pointer' }}
        >
          <Stack>
            <div>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="#228BE6"/>
                <path d="M20 28L14 24V16L20 20V28Z" fill="white"/>
                <path d="M20 28L26 24V16L20 20V28Z" fill="white"/>
                <path d="M20 19L14 15L20 11L26 15L20 19Z" fill="white"/>
              </svg>
            </div>
            <Text fw={500}>위치 기반 스터디</Text>
            <Text size="sm" c="dimmed">
              내 주변의 스터디를 쉽게 찾고 참여할 수 있습니다.
            </Text>
          </Stack>
        </Paper>

        <Paper
          shadow="xs"
          p="xl"
          onClick={() => handleCardClick('/progress')}
          style={{ cursor: 'pointer' }}
        >
          <Stack>
            <div>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="#228BE6"/>
                <path d="M28 27H14V13H16V25H28V27Z" fill="white"/>
                <path d="M17 21H19V25H17V21Z" fill="white"/>
                <path d="M20 19H22V25H20V19Z" fill="white"/>
                <path d="M23 16H25V25H23V16Z" fill="white"/>
              </svg>
            </div>
            <Text fw={500}>학습 진도 관리</Text>
            <Text size="sm" c="dimmed">
              스터디 진행 상황과 개인별 학습 현황을 한눈에 확인할 수 있습니다.
            </Text>
          </Stack>
        </Paper>

        <Paper
          shadow="xs"
          p="xl"
          onClick={() => handleCardClick('/schedule')}
          style={{ cursor: 'pointer' }}
        >
          <Stack>
            <div>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="#228BE6"/>
                <path d="M26 14H25V13H23V14H19V13H17V14H16C14.9 14 14 14.9 14 16V26C14 27.1 14.9 28 16 28H26C27.1 28 28 27.1 28 26V16C28 14.9 27.1 14 26 14ZM26 26H16V19H26V26ZM26 18H16V16H26V18Z" fill="white"/>
              </svg>
            </div>
            <Text fw={500}>일정 관리</Text>
            <Text size="sm" c="dimmed">
              스터디 일정을 효율적으로 관리하고 일정을 받을 수 있습니다.
            </Text>
          </Stack>
        </Paper>
      </SimpleGrid>
    </Container>
  );
}