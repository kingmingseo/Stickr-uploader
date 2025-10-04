'use client';

import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const { logout, isLoading } = useAuth();
  const router = useRouter();
  const handleClick = async () => {
    await logout();
    router.push('/login');
    router.refresh();
  };

  return (
    <button 
      onClick={handleClick} 
      disabled={isLoading}
      className="text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
      </svg>
      {isLoading ? '로그아웃 중...' : '로그아웃'}
    </button>
  );
}


