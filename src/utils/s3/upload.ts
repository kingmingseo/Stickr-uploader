import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// S3 클라이언트 초기화
const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export interface S3UploadResult {
  success: boolean;
  url?: string;
  key?: string;
  error?: string;
}

/**
 * 파일을 S3에 업로드합니다
 */
export async function uploadToS3(
  file: File,
  key: string
): Promise<S3UploadResult> {
  try {
    const buffer = Buffer.from(await file.arrayBuffer());

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: key,
      Body: buffer,
      ContentType: file.type,
      // ACL 제거 - 버킷 정책으로 공개 접근 설정
    });

    await s3Client.send(command);

    // 업로드된 파일의 URL 생성
    const url = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    return {
      success: true,
      url,
      key,
    };
  } catch (error) {
    console.error("S3 업로드 에러:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "S3 업로드 실패",
    };
  }
}

/**
 * 고유한 파일 키를 생성합니다
 */
export function generateFileKey(
  userId: string,
  originalName: string,
  category: string,
  timestamp: number = Date.now()
): string {
  const fileExtension = originalName.split(".").pop();
  const fileNameWithoutExt = originalName.replace(/\.[^/.]+$/, ""); // 확장자 제거

  // 한글과 영문, 숫자, 일부 특수문자만 허용하고 나머지는 _로 변환
  const sanitizedOriginalName = fileNameWithoutExt
    .replace(/[^가-힣a-zA-Z0-9.-]/g, "_") // 한글, 영문, 숫자, ., -만 허용
    .replace(/_+/g, "_") // 연속된 _를 하나로 변환
    .replace(/^_|_$/g, ""); // 앞뒤 _ 제거

  // 카테고리별 폴더 구조: public/stickers/{category}/{timestamp}_{filename}.{ext}
  return `public/stickers/${category}/${timestamp}_${sanitizedOriginalName}.${fileExtension}`;
}

/**
 * 파일 크기와 타입을 검증합니다
 */
export function validateFile(file: File): { valid: boolean; error?: string } {
  // 파일 크기 제한 (10MB)
  const maxSize = 10 * 1024 * 1024;
  if (file.size > maxSize) {
    return {
      valid: false,
      error: "파일 크기는 10MB를 초과할 수 없습니다.",
    };
  }

  // 허용된 이미지 타입
  const allowedTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/webp",
  ];
  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: "지원되지 않는 파일 형식입니다. (JPEG, PNG, GIF, WebP만 허용)",
    };
  }

  return { valid: true };
}
