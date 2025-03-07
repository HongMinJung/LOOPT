import { create } from 'zustand';

export interface StudyRoom {
  id: number;
  title: string;
  description: string;
  maxMembers: number;
  currentMembers: number;
  frequency: string;
  location: string;
  status: 'recruiting' | 'closed';
  createdAt: string;
}

interface StudyRoomStore {
  studyRooms: StudyRoom[];
  addStudyRoom: (studyRoom: Omit<StudyRoom, 'id' | 'currentMembers' | 'status' | 'createdAt'>) => void;
}

export const useStudyRoomStore = create<StudyRoomStore>((set) => ({
  studyRooms: [
    {
      id: 1,
      title: '알고리즘 스터디',
      description: '매주 알고리즘 문제를 함께 풀고 토론하는 스터디입니다.',
      maxMembers: 6,
      currentMembers: 4,
      frequency: 'weekly',
      location: '서울 강남구',
      status: 'recruiting',
      createdAt: new Date().toISOString(),
    }
  ],
  addStudyRoom: (newStudyRoom) => 
    set((state) => ({
      studyRooms: [...state.studyRooms, {
        ...newStudyRoom,
        id: state.studyRooms.length + 1,
        currentMembers: 1,
        status: 'recruiting',
        createdAt: new Date().toISOString(),
      }]
    })),
})); 