import { Container, Title, Paper, Stack } from '@mantine/core';
import { ProfileForm } from '@/components/profile/ProfileForm';

export default function ProfilePage() {
  return (
    <Container size="sm" py="xl">
      <Title order={1} mb="xl">프로필 설정</Title>
      <Paper shadow="xs" p="md">
        <ProfileForm />
      </Paper>
    </Container>
  );
} 