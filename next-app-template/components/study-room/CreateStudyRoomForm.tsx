'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  TextInput, 
  Textarea, 
  NumberInput, 
  Button, 
  Stack, 
  Select,
  Paper,
  Group
} from '@mantine/core';
import { useStudyRooms } from '@/contexts/StudyRoomContext';

export function CreateStudyRoomForm() {
  const router = useRouter();
  const { addStudyRoom } = useStudyRooms();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    maxMembers: 2,
    frequency: '',
    location: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      addStudyRoom(formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/study-rooms');
    } catch (error) {
      console.error('스터디룸 생성 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Paper shadow="xs" p="lg">
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextInput
            label="스터디명"
            placeholder="스터디 이름을 입력하세요"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            required
          />
          <Textarea
            label="스터디 설명"
            placeholder="스터디에 대한 설명을 입력하세요"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            minRows={3}
            required
          />
          <NumberInput
            label="최대 인원"
            placeholder="최대 인원을 입력하세요"
            value={formData.maxMembers}
            onChange={(value) => handleChange('maxMembers', value)}
            min={2}
            max={20}
            required
          />
          <Select
            label="스터디 주기"
            placeholder="스터디 주기를 선택하세요"
            value={formData.frequency}
            onChange={(value) => handleChange('frequency', value || '')}
            data={[
              { value: 'weekly', label: '매주' },
              { value: 'biweekly', label: '격주' },
              { value: 'monthly', label: '매월' },
            ]}
            required
          />
          <TextInput
            label="스터디 장소"
            placeholder="스터디 장소를 입력하세요"
            value={formData.location}
            onChange={(e) => handleChange('location', e.target.value)}
            required
          />
          <Group justify="flex-end" mt="md">
            <Button variant="light" onClick={() => router.back()}>
              취소
            </Button>
            <Button 
              type="submit" 
              loading={loading}
              disabled={!formData.title || !formData.description || !formData.frequency || !formData.location}
            >
              스터디룸 만들기
            </Button>
          </Group>
        </Stack>
      </form>
    </Paper>
  );
} 