'use client';

import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const { logout, isLoading } = useAuth();
  const router = useRouter();
  const handleClick = async () => {
    await logout();
    // 페이지 전역 상태 동기화를 원하면 클라이언트 라우터 refresh를 상위에서 처리하세요
    router.push('/login');
    router.refresh();
  };

  return (
    <button onClick={handleClick} disabled={isLoading}>
      {isLoading ? '로그아웃 중...' : '로그아웃'}
    </button>
  );
}


