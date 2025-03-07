'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

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

interface StudyRoomContextType {
  studyRooms: StudyRoom[];
  addStudyRoom: (studyRoom: Omit<StudyRoom, 'id' | 'currentMembers' | 'status' | 'createdAt'>) => void;
}

const StudyRoomContext = createContext<StudyRoomContextType | undefined>(undefined);

export function StudyRoomProvider({ children }: { children: ReactNode }) {
  const [studyRooms, setStudyRooms] = useState<StudyRoom[]>([
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
  ]);

  const addStudyRoom = (newStudyRoom: Omit<StudyRoom, 'id' | 'currentMembers' | 'status' | 'createdAt'>) => {
    setStudyRooms(prev => [...prev, {
      ...newStudyRoom,
      id: prev.length + 1,
      currentMembers: 1,
      status: 'recruiting',
      createdAt: new Date().toISOString(),
    }]);
  };

  return (
    <StudyRoomContext.Provider value={{ studyRooms, addStudyRoom }}>
      {children}
    </StudyRoomContext.Provider>
  );
}

export function useStudyRooms() {
  const context = useContext(StudyRoomContext);
  if (context === undefined) {
    throw new Error('useStudyRooms must be used within a StudyRoomProvider');
  }
  return context;
} 