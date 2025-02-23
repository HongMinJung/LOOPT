import { Container, Title, Text, Stack, Anchor } from '@mantine/core';
import { SignupForm } from '@/components/auth/SignupForm';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <Container size="xs" py="xl">
      <Stack>
        <Title order={1}>회원가입</Title>
        <Text c="dimmed">LOOPT와 함께 성장하세요</Text>
        <SignupForm />
        <Text ta="center" size="sm">
          이미 계정이 있으신가요?{' '}
          <Anchor component={Link} href="/login">
            로그인
          </Anchor>
        </Text>
      </Stack>
    </Container>
  );
} 