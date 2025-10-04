import React from 'react';
import Image from 'next/image';
import StickerLogo from '@/assets/Stickr.png';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* 배경 장식 요소 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 animate-fade-in">
        {/* 로고 및 제목 영역 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <Image
              src={StickerLogo}
              alt="Stickr Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Stickr Uploader
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Stickr 관리자 페이지
          </p>
        </div>
      </div>
      
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md relative z-10 animate-fade-in">
        <div className="bg-white/80 backdrop-blur-lg py-10 px-6 shadow-2xl sm:rounded-3xl sm:px-12 border border-white">
          {children}
        </div>
      </div>

      {/* 하단 텍스트 */}
      <div className="mt-8 text-center relative z-10">
        <p className="text-sm text-gray-600">
          © 2025 Stickr Uploader. All rights reserved.
        </p>
      </div>
    </div>
  );
}
