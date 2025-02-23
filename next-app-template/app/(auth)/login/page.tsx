import { Container, Title, Text, Stack, Anchor } from '@mantine/core';
import { LoginForm } from '@/components/auth/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <Container size="xs" py="xl">
      <Stack>
        <Title order={1}>로그인</Title>
        <Text c="dimmed">LOOPT에 오신 것을 환영합니다</Text>
        <LoginForm />
        <Text ta="center" size="sm">
          계정이 없으신가요?{' '}
          <Anchor component={Link} href="/signup">
            회원가입
          </Anchor>
        </Text>
      </Stack>
    </Container>
  );
} 