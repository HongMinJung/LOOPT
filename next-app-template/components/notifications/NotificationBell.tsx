'use client';

import { useState } from 'react';
import { ActionIcon, Indicator, Popover, Stack, Text, UnstyledButton } from '@mantine/core';
import { IconBell } from '@tabler/icons-react';

export function NotificationBell() {
  const [opened, setOpened] = useState(false);

  return (
    <Popover opened={opened} onChange={setOpened} position="bottom-end">
      <Popover.Target>
        <Indicator color="red" size={8} offset={4}>
          <ActionIcon variant="subtle" size="lg" onClick={() => setOpened((o) => !o)}>
            <IconBell size={20} />
          </ActionIcon>
        </Indicator>
      </Popover.Target>

      <Popover.Dropdown>
        <Stack>
          {[1, 2, 3].map((i) => (
            <UnstyledButton key={i} p="xs" style={{ borderRadius: 4 }}>
              <Text size="sm" fw={500}>새로운 스터디원이 참여했습니다</Text>
              <Text size="xs" c="dimmed">방금 전</Text>
            </UnstyledButton>
          ))}
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
} 