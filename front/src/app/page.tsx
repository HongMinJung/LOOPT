// app/page.tsx
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    // 로그인된 사용자는 대시보드로
    redirect('/dashboard');
  } else {
    // 로그인되지 않은 사용자는 로그인 페이지로
    redirect('/login');
  }
}