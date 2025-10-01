# Stickr Uploader 설정 가이드

## 환경변수 설정

`.env.local` 파일을 생성하고 다음 환경변수들을 설정하세요:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# AWS S3
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_REGION=ap-northeast-2
AWS_S3_BUCKET_NAME=your_s3_bucket_name
```

## AWS S3 설정

### 1. S3 버킷 생성
1. AWS 콘솔에서 S3 서비스로 이동
2. "버킷 만들기" 클릭
3. 버킷 이름 입력 (예: `stickr-stickers`)
4. 리전 선택: **아시아 태평양 (서울) ap-northeast-2**
5. 퍼블릭 액세스 설정에서 "모든 퍼블릭 액세스 차단" 해제
6. 버킷 생성

### 2. CORS 설정
S3 버킷의 권한 탭에서 CORS 설정:

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "PUT", "POST", "DELETE"],
    "AllowedOrigins": ["http://localhost:3000", "https://yourdomain.com"],
    "ExposeHeaders": []
  }
]
```

### 3. 버킷 정책 설정
S3 버킷의 권한 탭에서 버킷 정책 설정:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::stickr-stickers/*"
    }
  ]
}
```

### 4. 퍼블릭 액세스 차단 설정
S3 버킷의 권한 탭에서:
1. "퍼블릭 액세스 차단" 섹션으로 이동
2. "모든 퍼블릭 액세스 차단" 체크 해제
3. "새 퍼블릭 ACL 및 퍼블릭 객체 업로드 차단" 체크 해제
4. "ACL을 통한 퍼블릭 액세스 차단" 체크 해제
5. "새 퍼블릭 정책 또는 퍼블릭 객체 업로드 차단" 체크 해제

### 5. IAM 사용자 생성
1. AWS IAM 콘솔에서 새 사용자 생성
2. "프로그래밍 방식 액세스" 선택
3. 다음 정책을 연결:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:PutObjectAcl",
        "s3:GetObject",
        "s3:DeleteObject"
      ],
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

## Supabase 설정

### 1. 데이터베이스 마이그레이션
Supabase SQL 에디터에서 `database/migrations/001_create_stickers_table.sql` 파일의 내용을 실행하세요.

### 2. 인증 설정
Supabase 대시보드의 Authentication > Settings에서:
- Site URL 설정
- Redirect URLs 설정
- 이메일 확인 필요 여부 설정

## 개발 서버 실행

```bash
npm run dev
```

## 주요 기능

1. **파일 업로드**: S3에 이미지 파일 업로드
2. **메타데이터 저장**: Supabase에 스티커 정보 저장
3. **사용자 인증**: Supabase Auth 사용
4. **파일 검증**: 크기, 타입 제한
5. **에러 처리**: 상세한 에러 메시지 제공

## 파일 구조

```
src/
├── app/api/upload/route.ts     # 업로드 API
├── utils/
│   ├── s3/upload.ts           # S3 업로드 유틸리티
│   └── supabase/
│       ├── server.ts          # Supabase 서버 클라이언트
│       └── stickers.ts        # 스티커 관련 DB 작업
└── components/
    └── MultiStickerUpload.tsx # 다중 업로드 컴포넌트
```
