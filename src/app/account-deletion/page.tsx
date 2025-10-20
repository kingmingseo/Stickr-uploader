import React from 'react';
import Link from 'next/link';

export default function AccountDeletionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-lg shadow-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Stickr
            </h1>
            <Link 
              href="/login"
              className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              로그인
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
          {/* Title Section */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 px-8 py-10 text-white">
            <h1 className="text-4xl font-bold mb-3">계정 삭제 방법</h1>
            <p className="text-red-100 text-sm">How to Delete Your Account</p>
          </div>

          {/* Content */}
          <div className="px-8 py-10">
            {/* Introduction */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-500">
                <p className="text-gray-700 leading-relaxed">
                  Stickr 앱에서 계정을 삭제하고 싶으신가요?<br />
                  아래의 간단한 단계를 따라 계정 삭제를 진행하실 수 있습니다.
                </p>
              </div>
            </section>

            {/* Steps */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-red-600">📱</span>
                계정 삭제 단계
              </h2>

              {/* Step 1 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    1
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">하단 내비바</h3>
                  <p className="text-gray-600 leading-relaxed">
                    앱 화면 하단에 있는 내비게이션 바를 확인합니다.
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    2
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">마이페이지</h3>
                  <p className="text-gray-600 leading-relaxed">
                    하단 내비바에서 <span className="font-semibold text-orange-600">마이페이지</span> 메뉴를 선택합니다.
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-red-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    3
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">내정보 수정</h3>
                  <p className="text-gray-600 leading-relaxed">
                    마이페이지에서 <span className="font-semibold text-yellow-600">내정보 수정</span> 버튼을 누릅니다.
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    4
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">회원탈퇴</h3>
                  <p className="text-gray-600 leading-relaxed">
                    화면 하단에 있는 <span className="font-semibold text-red-600">회원탈퇴</span> 버튼을 눌러 계정 삭제를 진행합니다.
                  </p>
                </div>
              </div>
            </section>

            {/* Visual Flow */}
            <section className="mt-12">
              <div className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 rounded-2xl p-8 border-2 border-red-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">간단 요약</h3>
                <div className="flex flex-wrap items-center justify-center gap-3 text-center">
                  <div className="bg-white rounded-lg px-4 py-3 shadow-md">
                    <p className="font-bold text-red-600">하단 내비바</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                  <div className="bg-white rounded-lg px-4 py-3 shadow-md">
                    <p className="font-bold text-orange-600">마이페이지</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                  <div className="bg-white rounded-lg px-4 py-3 shadow-md">
                    <p className="font-bold text-yellow-600">내정보 수정</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                  <div className="bg-white rounded-lg px-4 py-3 shadow-md">
                    <p className="font-bold text-red-700">회원탈퇴</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Warning */}
            <section className="mt-8">
              <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <h3 className="font-bold text-red-900 mb-2">주의사항</h3>
                    <ul className="space-y-2 text-red-800 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        <span>계정 삭제 시 모든 데이터가 영구적으로 삭제됩니다.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        <span>삭제된 계정은 복구할 수 없습니다.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        <span>신중하게 결정해 주세요.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="mt-8">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <p className="text-gray-700 mb-3">
                  계정 삭제에 문제가 있으신가요?
                </p>
                <a 
                  href="mailto:enommiski@gmail.com" 
                  className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold underline"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  고객센터 문의하기
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-8 flex justify-center gap-6">
          <Link 
            href="/terms"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors duration-200"
          >
            이용약관
          </Link>
          <span className="text-gray-300">|</span>
          <Link 
            href="/privacy"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors duration-200"
          >
            개인정보처리방침
          </Link>
          <span className="text-gray-300">|</span>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            홈으로
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-500">
        <p>© 2025 Stickr. All rights reserved.</p>
      </footer>
    </div>
  );
}

