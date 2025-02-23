'use client';

import { Stack, NavLink } from '@mantine/core';
import { 
  IconHome, 
  IconUsers, 
  IconMap, 
  IconChartBar 
} from '@tabler/icons-react';

export function Navbar() {
  return (
    <Stack p="md">
      <NavLink
        label="홈"
        leftSection={<IconHome size={20} />}
        variant="filled"
      />
      <NavLink
        label="스터디룸"
        leftSection={<IconUsers size={20} />}
      />
      <NavLink
        label="주변 스터디"
        leftSection={<IconMap size={20} />}
      />
      <NavLink
        label="통계"
        leftSection={<IconChartBar size={20} />}
      />
    </Stack>
  );
} 