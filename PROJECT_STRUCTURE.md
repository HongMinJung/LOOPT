# LOOPT - 스터디 관리 플랫폼 구조

## 1. 프로젝트 개요
위치 기반 스터디 관리 플랫폼으로, Next.js와 Mantine UI를 사용하여 개발된 웹 애플리케이션입니다.

## 2. 기술 스택
- Frontend: Next.js (App Router)
- UI Library: Mantine v7
- 상태 관리: Context API
- 스타일링: PostCSS
- 테스트: Jest + React Testing Library
- 개발 도구: TypeScript, ESLint, Prettier

## 3. 디렉토리 구조

### `/app` - 페이지 구성
- `page.tsx`: 메인 홈페이지
- `/about`: 서비스 소개 페이지
- `/study-rooms`: 스터디룸 관련 페이지
  - `page.tsx`: 스터디룸 목록
  - `/[id]`: 스터디룸 상세
  - `/create`: 스터디룸 생성
- `/dashboard`: 대시보드 페이지
- `/map`: 위치 기반 스터디 검색
- `/(auth)`: 인증 관련 페이지
  - `/login`: 로그인
  - `/signup`: 회원가입
- `/profile`: 사용자 프로필

### `/components` - 컴포넌트
- `/layout`: 레이아웃 관련 컴포넌트
  - `AppShell.tsx`: 전체 레이아웃
  - `Header.tsx`: 상단 헤더
  - `Navbar.tsx`: 네비게이션 바
- `/auth`: 인증 관련 컴포넌트
  - `LoginForm.tsx`: 로그인 폼
  - `SignupForm.tsx`: 회원가입 폼
- `/study-room`: 스터디룸 관련 컴포넌트
  - `StudyRoomCard.tsx`: 스터디룸 카드
  - `CreateStudyRoomForm.tsx`: 스터디룸 생성 폼
  - `AttendanceCheck.tsx`: 출석체크
- `/dashboard`: 대시보드 컴포넌트
  - `StudyProgress.tsx`: 학습 진행 현황
  - `AttendanceStats.tsx`: 출석 통계
  - `UpcomingStudies.tsx`: 예정된 스터디
- `/map`: 지도 관련 컴포넌트
  - `MapView.tsx`: 카카오맵 연동
  - `StudyRoomList.tsx`: 주변 스터디 목록
- `/chat`: 채팅 관련 컴포넌트
  - `ChatRoom.tsx`: 실시간 채팅방

### `/contexts` - Context API
- `StudyRoomContext.tsx`: 스터디룸 상태 관리

### `/theme` - 스타일 설정
- `theme.ts`: Mantine 테마 설정

### `/test-utils` - 테스트 유틸리티
- `render.tsx`: 테스트용 렌더 유틸리티
- `index.ts`: 테스트 유틸리티 모음

## 4. 주요 기능

### 4.1 스터디룸 관리
- 스터디룸 생성/조회/수정/삭제
- 실시간 채팅
- 출석 체크
- 진행 현황 관리

### 4.2 위치 기반 기능
- 카카오맵 연동
- 주변 스터디 검색
- 위치 기반 필터링

### 4.3 대시보드
- 학습 진행 현황
- 출석 통계
- 예정된 스터디 일정

### 4.4 사용자 관리
- 회원가입/로그인
- 프로필 관리
- 알림 시스템

## 5. 개발 환경 설정
- Node.js
- yarn 패키지 매니저
- VSCode (권장 에디터)
- Git

## 6. 스크립트
- `yarn dev`: 개발 서버 실행
- `yarn build`: 프로덕션 빌드
- `yarn test`: 테스트 실행
- `yarn lint`: 코드 린팅
- `yarn storybook`: Storybook 실행 