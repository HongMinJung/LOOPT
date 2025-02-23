'use client';

import { Group, Text, Button, ActionIcon } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { useMantineColorScheme } from '@mantine/core';
import Link from 'next/link';

export function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group h="100%" px="md" justify="space-between">
      <Group>
        <Text component={Link} href="/" size="xl" fw={700}>
          LOOPT
        </Text>
      </Group>

      <Group>
        <ActionIcon
          variant="default"
          onClick={() => toggleColorScheme()}
          size="lg"
        >
          {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
        </ActionIcon>
        <Button component={Link} href="/login" variant="default">
          로그인
        </Button>
        <Button component={Link} href="/signup">
          회원가입
        </Button>
      </Group>
    </Group>
  );
} 