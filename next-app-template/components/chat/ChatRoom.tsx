'use client';

import { useState } from 'react';
import { Paper, TextInput, Button, Stack, Avatar, Text, Group } from '@mantine/core';
import { IconSend } from '@tabler/icons-react';

interface Message {
  id: number;
  user: string;
  text: string;
  timestamp: string;
}

export function ChatRoom() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      user: '김철수',
      text: '안녕하세요!',
      timestamp: '오후 2:30'
    },
    {
      id: 2,
      user: '이영희',
      text: '오늘 스터디 시작하기 전에 문제 먼저 읽어보시는 게 어떨까요?',
      timestamp: '오후 2:32'
    }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      user: '나',
      text: message,
      timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <Paper shadow="xs" p="md" radius="md">
      <Stack h={400}>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <Stack gap="xs">
            {messages.map((msg) => (
              <Group key={msg.id} align="start" gap="xs">
                <Avatar radius="xl" size="sm" />
                <div style={{ flex: 1 }}>
                  <Group gap="xs">
                    <Text size="sm" fw={500}>{msg.user}</Text>
                    <Text size="xs" c="dimmed">{msg.timestamp}</Text>
                  </Group>
                  <Text size="sm">{msg.text}</Text>
                </div>
              </Group>
            ))}
          </Stack>
        </div>

        <Group>
          <TextInput
            placeholder="메시지를 입력하세요"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ flex: 1 }}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend}>
            <IconSend size={16} />
          </Button>
        </Group>
      </Stack>
    </Paper>
  );
} 