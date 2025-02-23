import { Container, Title, Paper, Group, TextInput } from '@mantine/core';
import { MapView } from '@/components/map/MapView';
import { StudyRoomList } from '@/components/map/StudyRoomList';

export default function MapPage() {
  return (
    <Container fluid p={0} style={{ height: 'calc(100vh - 60px)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', height: '100%' }}>
        <Paper p="md" radius={0} style={{ overflowY: 'auto' }}>
          <Title order={2} mb="md">주변 스터디</Title>
          <TextInput
            placeholder="지역을 검색하세요"
            mb="md"
          />
          <StudyRoomList />
        </Paper>
        <MapView />
      </div>
    </Container>
  );
} 