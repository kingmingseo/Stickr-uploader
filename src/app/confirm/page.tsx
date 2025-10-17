// app/auth/confirm/page.tsx

export default function EmailConfirmPage() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #7C3AED 0%, #60A5FA 50%, #1D4ED8 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '24px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
        maxWidth: '500px',
        width: '100%',
        padding: '60px 40px',
        textAlign: 'center'
      }}>
        

        {/* 체크마크 */}
        <div style={{
          width: '80px',
          height: '80px',
          background: '#10B981',
          borderRadius: '50%',
          margin: '0 auto 30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7"/>
          </svg>
        </div>

        {/* 메인 텍스트 */}
        <h1 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#333D4B',
          marginBottom: '16px'
        }}>
          이메일 인증 완료! 🎉
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: '#575757',
          lineHeight: '1.6',
          marginBottom: '40px'
        }}>
          이메일 인증이 성공적으로 완료되었습니다.<br/>
          Stickr 앱으로 돌아가 로그인해주세요.
        </p>

      </div>
    </div>
  );
}