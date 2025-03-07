'use client';

import { useState } from 'react';
import { TextInput, Button, Stack, Avatar, Group, FileInput } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';

export function ProfileForm() {
  const [fullName, setFullName] = useState('');
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: 프로필 업데이트 로직 구현
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <Group justify="center" mb="md">
          <Avatar size={120} radius={120} />
        </Group>
        <FileInput
          label="프로필 이미지"
          placeholder="이미지를 선택하세요"
          accept="image/png,image/jpeg"
          leftSection={<IconUpload size={14} />}
        />
        <TextInput
          label="이름"
          placeholder="실명을 입력하세요"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextInput
          label="자기소개"
          placeholder="간단한 자기소개를 입력하세요"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <Button type="submit" loading={loading}>
          프로필 업데이트
        </Button>
      </Stack>
    </form>
  );
} 