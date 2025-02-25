'use client';

import { Group, Text, Button, ActionIcon } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { useMantineColorScheme } from '@mantine/core';
import Link from 'next/link';
const buttonlist = [
  {
    path: "/login",
    label: "로그인",
    variant: "default"  // 로그인 버튼에만 default variant 적용
  },
  {
    path: "/signup",
    label: "회원가입"
  },
];
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
        {buttonlist.map((button, index) => (
          <Button
            key={index}
            component={Link}
            href={button.path}
            variant={button.variant}
          >
            {button.label}
          </Button>
        ))}
      </Group>
    </Group>
  );
} 