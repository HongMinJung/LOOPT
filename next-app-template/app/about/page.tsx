'use client';

import { Container, Title, Text, Stack, Grid, Card, ThemeIcon } from '@mantine/core';
import { IconUsers, IconMap, IconChartBar, IconCalendar } from '@tabler/icons-react';

export default function AboutPage() {
  const features = [
    {
      icon: <IconUsers size={24} />,
      title: '스터디 그룹 관리',
      description: '효율적인 스터디 그룹 관리와 멤버 관리 기능을 제공합니다.'
    },
    {
      icon: <IconMap size={24} />,
      title: '위치 기반 스터디',
      description: '내 주변의 스터디를 쉽게 찾고 참여할 수 있습니다.'
    },
    {
      icon: <IconChartBar size={24} />,
      title: '학습 진도 관리',
      description: '스터디 진행 상황과 개인별 학습 현황을 한눈에 확인할 수 있습니다.'
    },
    {
      icon: <IconCalendar size={24} />,
      title: '일정 관리',
      description: '스터디 일정을 효율적으로 관리하고 알림을 받을 수 있습니다.'
    }
  ];

  return (
    <Container size="lg" py="xl">
      <Stack align="center" mb={50}>
        <Title order={1} size={48} ta="center">
          LOOPT 소개
        </Title>
        <Text size="xl" c="dimmed" maw={600} ta="center">
          LOOPT는 위치 기반 스터디 관리 플랫폼으로,
          효율적인 스터디 운영과 관리를 도와드립니다.
        </Text>
      </Stack>

      <Grid>
        {features.map((feature, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
            <Card shadow="sm" padding="lg" radius="md">
              <ThemeIcon size="xl" radius="md" mb="md">
                {feature.icon}
              </ThemeIcon>
              <Text fw={500} mb="xs">{feature.title}</Text>
              <Text size="sm" c="dimmed">
                {feature.description}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
} 