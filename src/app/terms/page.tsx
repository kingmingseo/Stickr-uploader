import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-lg shadow-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Stickr
            </h1>
            <Link 
              href="/login"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
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
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-10 text-white">
            <h1 className="text-4xl font-bold mb-3">서비스 이용약관</h1>
            <p className="text-blue-100 text-sm">Terms of Service</p>
            <div className="mt-6 inline-block bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm font-medium">시행일: 2025년 1월 1일</p>
            </div>
          </div>

          {/* Terms Content */}
          <div className="px-8 py-10 space-y-8">
            {/* Article 1 */}
            <section className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">
                  1
                </span>
                제1조 (목적)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                본 약관은 Stickr(이하 &quot;서비스&quot;)의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            {/* Article 2 */}
            <section className="border-l-4 border-indigo-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">
                  2
                </span>
                제2조 (정의)
              </h2>
              <div className="space-y-2 text-gray-700 leading-relaxed">
                <p>1. &quot;서비스&quot;란 Stickr 모바일 애플리케이션을 통해 제공되는 스티커 복사 및 공유 서비스를 의미합니다.</p>
                <p>2. &quot;이용자&quot;란 본 약관에 따라 서비스를 이용하는 회원 및 비회원을 말합니다.</p>
                <p>3. &quot;회원&quot;이란 회원등록을 한 자로서 서비스를 계속적으로 이용할 수 있는 자를 말합니다.</p>
              </div>
            </section>

            {/* Article 3 */}
            <section className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 text-sm font-bold">
                  3
                </span>
                제3조 (약관의 효력 및 변경)
              </h2>
              <div className="space-y-2 text-gray-700 leading-relaxed">
                <p>1. 본 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.</p>
                <p>2. 회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있습니다.</p>
                <p>3. 약관이 변경되는 경우 회사는 변경사항을 시행일자 7일 전부터 공지합니다.</p>
              </div>
            </section>

            {/* Article 4 */}
            <section className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">
                  4
                </span>
                제4조 (서비스의 제공)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">회사는 다음과 같은 서비스를 제공합니다:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>스티커 제공 및 복사 기능</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>스티커 검색 및 즐겨찾기 기능</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>회원 관리 서비스</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>기타 회사가 정하는 서비스</span>
                </li>
              </ul>
            </section>

            {/* Article 5 */}
            <section className="border-l-4 border-indigo-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">
                  5
                </span>
                제5조 (서비스의 중단)
              </h2>
              <div className="space-y-2 text-gray-700 leading-relaxed">
                <p>1. 회사는 시스템 점검, 보수, 교체 등의 사유로 서비스 제공을 일시 중단할 수 있습니다.</p>
                <p>2. 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우 서비스를 중단할 수 있습니다.</p>
              </div>
            </section>

            {/* Article 6 */}
            <section className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 text-sm font-bold">
                  6
                </span>
                제6조 (회원가입)
              </h2>
              <div className="space-y-2 text-gray-700 leading-relaxed">
                <p>1. 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입하여 회원가입을 신청합니다.</p>
                <p>2. 회사는 다음 각 호의 경우 회원가입을 승낙하지 않을 수 있습니다:</p>
                <ul className="space-y-1 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">•</span>
                    <span>허위 정보를 기재한 경우</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">•</span>
                    <span>타인의 명의를 도용한 경우</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">•</span>
                    <span>기타 회사가 정한 이용 요건을 충족하지 못한 경우</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Article 7 */}
            <section className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">
                  7
                </span>
                제7조 (회원 탈퇴 및 자격 상실)
              </h2>
              <div className="space-y-2 text-gray-700 leading-relaxed">
                <p>1. 회원은 언제든지 탈퇴를 요청할 수 있으며, 회사는 즉시 처리합니다.</p>
                <p>2. 회원이 다음 사유에 해당하는 경우 회원 자격을 제한 또는 정지시킬 수 있습니다:</p>
                <ul className="space-y-1 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>허위 정보 등록</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>타인의 정보 도용</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>서비스 운영 방해</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>법령 또는 공서양속 위반</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Article 8 */}
            <section className="border-l-4 border-indigo-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">
                  8
                </span>
                제8조 (이용자의 의무)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">이용자는 다음 행위를 하여서는 안됩니다:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>허위 정보 등록</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>타인의 정보 도용</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>회사의 저작권 침해</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>타인의 명예 훼손 또는 업무 방해</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>음란, 폭력적 정보 게시</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>기타 법령 위반 행위</span>
                </li>
              </ul>
            </section>

            {/* Article 9 */}
            <section className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 text-sm font-bold">
                  9
                </span>
                제9조 (저작권)
              </h2>
              <div className="space-y-2 text-gray-700 leading-relaxed">
                <p>1. 서비스 내 모든 콘텐츠의 저작권은 회사에 귀속됩니다.</p>
                <p>2. 이용자는 서비스를 통해 얻은 정보를 회사의 사전 승낙 없이 영리 목적으로 이용할 수 없습니다.</p>
              </div>
            </section>

            {/* Article 10 */}
            <section className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">
                  10
                </span>
                제10조 (면책조항)
              </h2>
              <div className="space-y-2 text-gray-700 leading-relaxed">
                <p>1. 회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력으로 서비스를 제공할 수 없는 경우 책임이 면제됩니다.</p>
                <p>2. 회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다.</p>
                <p>3. 회사는 이용자가 게재한 정보의 신뢰도, 정확성에 대해 책임을 지지 않습니다.</p>
              </div>
            </section>

            {/* Article 11 */}
            <section className="border-l-4 border-indigo-500 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">
                  11
                </span>
                제11조 (준거법 및 관할)
              </h2>
              <div className="space-y-2 text-gray-700 leading-relaxed">
                <p>1. 본 약관은 대한민국 법령에 따라 규율되고 해석됩니다.</p>
                <p>2. 서비스 이용 관련 분쟁에 대해서는 회사 소재지 관할 법원을 전속 관할로 합니다.</p>
              </div>
            </section>

            {/* Footer */}
            <div className="pt-8 mt-8 border-t border-gray-200">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
                <p className="text-gray-700 font-medium">
                  본 약관은 2025년 1월 1일부터 시행됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-500">
        <p>© 2025 Stickr. All rights reserved.</p>
      </footer>
    </div>
  );
}

