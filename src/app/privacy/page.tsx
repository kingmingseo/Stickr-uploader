import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-lg shadow-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Stickr
            </h1>
            <Link 
              href="/login"
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors duration-200"
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
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-10 text-white">
            <h1 className="text-4xl font-bold mb-3">개인정보처리방침</h1>
            <p className="text-purple-100 text-sm">Privacy Policy</p>
            <div className="mt-6 inline-block bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm font-medium">시행일: 2025년 1월 1일</p>
            </div>
          </div>

          {/* Privacy Content */}
          <div className="px-8 py-10 space-y-8">
            {/* Introduction */}
            <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">
                Stickr(이하 &quot;회사&quot;)는 이용자의 개인정보를 중요시하며, 개인정보 보호법 등 관련 법령을 준수하고 있습니다.
              </p>
            </section>

            {/* Section 1 */}
            <section className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 text-sm font-bold">
                  1
                </span>
                수집하는 개인정보
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다:
              </p>
              
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    회원가입 시
                  </h3>
                  <ul className="space-y-1 ml-4 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">-</span>
                      <span>이메일 주소 (필수)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">-</span>
                      <span>닉네임 (필수)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">-</span>
                      <span>프로필 사진 (선택)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-pink-50 rounded-lg p-4">
                  <h3 className="font-bold text-pink-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
                    서비스 이용 과정에서 자동 수집
                  </h3>
                  <ul className="space-y-1 ml-4 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">-</span>
                      <span>기기 정보 (모델명, OS 버전)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">-</span>
                      <span>앱 사용 기록</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">-</span>
                      <span>IP 주소</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="border-l-4 border-pink-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-600 text-sm font-bold">
                  2
                </span>
                개인정보의 수집 및 이용 목적
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                회사는 수집한 개인정보를 다음의 목적으로 이용합니다:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>회원 가입 및 관리</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>서비스 제공 및 개선</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>이용자 식별 및 본인 확인</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>고객 문의 대응</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>서비스 이용 통계 분석</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>공지사항 전달</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 text-sm font-bold">
                  3
                </span>
                개인정보의 보유 및 이용 기간
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
              </p>
              <div className="bg-purple-50 rounded-lg p-4 space-y-2">
                <p className="text-gray-700 flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong className="text-purple-900">회원 탈퇴 시:</strong> 즉시 파기</span>
                </p>
                <p className="text-gray-700 flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong className="text-purple-900">서비스 미이용 시:</strong> 1년 후 파기 안내 후 파기</span>
                </p>
              </div>
              <p className="text-gray-600 text-sm mt-3 italic">
                단, 관련 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안 보관합니다.
              </p>
            </section>

            {/* Section 4 */}
            <section className="border-l-4 border-pink-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-600 text-sm font-bold">
                  4
                </span>
                개인정보의 제3자 제공
              </h2>
              <div className="bg-pink-50 rounded-lg p-5 mb-3">
                <p className="text-pink-900 font-semibold mb-3">
                  ⚠️ 회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.
                </p>
                <p className="text-gray-700 mb-2">다만, 다음의 경우에는 예외로 합니다:</p>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-pink-500">•</span>
                    <span>이용자가 사전에 동의한 경우</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-pink-500">•</span>
                    <span>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 text-sm font-bold">
                  5
                </span>
                개인정보 처리 위탁
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회사는 서비스 제공을 위해 다음과 같이 개인정보 처리 업무를 위탁하고 있습니다:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-bold text-purple-900 mb-1">클라우드 서비스 제공</h3>
                  <p className="text-gray-700">Supabase</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-bold text-purple-900 mb-1">이미지 저장</h3>
                  <p className="text-gray-700">AWS S3</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">
                회사는 위탁계약 체결 시 개인정보 보호법에 따라 위탁업무 수행목적 외 개인정보 처리금지, 안전성 확보조치 등을 명확히 규정하고 있습니다.
              </p>
            </section>

            {/* Section 6 */}
            <section className="border-l-4 border-pink-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-600 text-sm font-bold">
                  6
                </span>
                이용자의 권리
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                이용자는 다음과 같은 권리를 행사할 수 있습니다:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-pink-50 rounded-lg p-4 flex items-center gap-3">
                  <span className="text-2xl">🔍</span>
                  <span className="text-gray-700 font-medium">개인정보 열람 요구</span>
                </div>
                <div className="bg-pink-50 rounded-lg p-4 flex items-center gap-3">
                  <span className="text-2xl">✏️</span>
                  <span className="text-gray-700 font-medium">개인정보 정정 요구</span>
                </div>
                <div className="bg-pink-50 rounded-lg p-4 flex items-center gap-3">
                  <span className="text-2xl">🗑️</span>
                  <span className="text-gray-700 font-medium">개인정보 삭제 요구</span>
                </div>
                <div className="bg-pink-50 rounded-lg p-4 flex items-center gap-3">
                  <span className="text-2xl">⏸️</span>
                  <span className="text-gray-700 font-medium">개인정보 처리 정지 요구</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                ℹ️ 위 권리 행사는 앱 내 설정 또는 고객센터를 통해 가능합니다.
              </p>
            </section>

            {/* Section 7 */}
            <section className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 text-sm font-bold">
                  7
                </span>
                개인정보의 파기
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
              </p>
              
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-5">
                  <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                    <span>📋</span>
                    파기 절차
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-5">
                  <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <span>🔨</span>
                    파기 방법
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>전자적 파일:</strong> 복구 불가능한 방법으로 영구 삭제</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>종이 문서:</strong> 분쇄기로 분쇄하거나 소각</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section className="border-l-4 border-pink-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-600 text-sm font-bold">
                  8
                </span>
                개인정보 보호책임자
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제를 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 border-2 border-pink-200">
                <h3 className="font-bold text-pink-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">👤</span>
                  개인정보 보호책임자
                </h3>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">이메일:</span>
                  <a 
                    href="mailto:enommiski@gmail.com" 
                    className="text-pink-600 hover:text-pink-700 underline font-medium"
                  >
                    enommiski@gmail.com
                  </a>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 text-sm font-bold">
                  9
                </span>
                개인정보 처리방침 변경
              </h2>
              <p className="text-gray-700 leading-relaxed">
                본 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
              </p>
            </section>

            {/* Footer */}
            <div className="pt-8 mt-8 border-t border-gray-200">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 text-center">
                <p className="text-gray-700 font-medium">
                  본 방침은 2025년 1월 1일부터 시행됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-8 flex justify-center gap-6">
          <Link 
            href="/terms"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors duration-200"
          >
            이용약관 보기
          </Link>
          <span className="text-gray-300">|</span>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            홈으로 돌아가기
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

