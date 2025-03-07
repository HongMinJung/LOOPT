'use client';

import { useState } from 'react';
import { TextInput, PasswordInput, Button, Stack, Text } from '@mantine/core';

export function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: 회원가입 로직 구현
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <TextInput
          label="이메일"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextInput
          label="사용자 이름"
          placeholder="사용자 이름을 입력하세요"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <PasswordInput
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" loading={loading}>
          회원가입
        </Button>
      </Stack>
    </form>
  );
} 