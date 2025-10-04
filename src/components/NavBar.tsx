import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoutButton from '@/components/LogoutButton';
import StickerLogo from '@/assets/Stickr.png';

export default function NavBar() {
  return (
    <nav className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-200 group-hover:scale-105 overflow-hidden">
                <Image
                  src={StickerLogo}
                  alt="Stickr Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Stickr Uploader
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <Link 
              href="/upload" 
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
              </svg>
              업로드
            </Link>
            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  );
}


