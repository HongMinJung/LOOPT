import { Container, Title, Text, Button, Group, Stack } from '@mantine/core';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Container size="lg">
      <Stack align="center" mt={50} spacing="xl">
        <Title order={1} size={48} ta="center">
          함께 성장하는 스터디 플랫폼
        </Title>
        <Text size="xl" c="dimmed" maw={600} ta="center">
          위치 기반으로 주변의 스터디를 찾고, 
          함께 공부하며 성장할 수 있는 플랫폼입니다.
        </Text>
        <Group>
          <Button
            component={Link}
            href="/study-rooms"
            size="lg"
          >
            시작하기
          </Button>
          <Button
            component={Link}
            href="/about"
            size="lg"
            variant="light"
          >
            더 알아보기
          </Button>
        </Group>
      </Stack>
    </Container>
  );
}
