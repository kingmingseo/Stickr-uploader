import React from 'react';
import Link from 'next/link';
import LogoutButton from '@/components/LogoutButton';

export default function NavBar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Stickr Uploader
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              href="/upload" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              업로드
            </Link>
            {/* 대시보드 링크는 당분간 유지하거나 필요 없으면 제거하세요 */}
            {/* <Link href="/dashboard" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">대시보드</Link> */}
            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  );
}


