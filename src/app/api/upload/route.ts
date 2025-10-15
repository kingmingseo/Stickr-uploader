import { NextRequest, NextResponse } from 'next/server';
import { uploadToS3, generateFileKey, validateFile } from '@/utils/s3/upload';
import { createSticker } from '@/utils/supabase/stickers';
import { createClient } from '@/utils/supabase/server';
import { getEnglishCategory } from '@/constants/categories';

// Sharp 라이브러리 사용을 위해 Node.js runtime 지정

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as string;
    const tagsString = formData.get('tags') as string;

    // 기본 유효성 검사
    if (!file) {
      return NextResponse.json(
        { success: false, error: '파일이 필요합니다' },
        { status: 400 }
      );
    }

    if (!title || !category) {
      return NextResponse.json(
        { success: false, error: '제목과 카테고리는 필수입니다' },
        { status: 400 }
      );
    }

    // 파일 유효성 검사
    const fileValidation = validateFile(file);
    if (!fileValidation.valid) {
      return NextResponse.json(
        { success: false, error: fileValidation.error },
        { status: 400 }
      );
    }

    // 태그 파싱
    let tags: string[] = [];
    try {
      tags = tagsString ? JSON.parse(tagsString) : [];
    } catch (error) {
      console.warn('태그 파싱 에러:', error);
    }

    // 사용자 인증 확인
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return NextResponse.json(
        { success: false, error: '인증이 필요합니다' },
        { status: 401 }
      );
    }

    // 카테고리를 영어로 변환
    const englishCategory = getEnglishCategory(category);

    // S3에 파일 업로드
    const fileKey = generateFileKey('', file.name, englishCategory);
    const uploadResult = await uploadToS3(file, fileKey);

    if (!uploadResult.success) {
      console.error('S3 업로드 실패:', uploadResult.error);
      return NextResponse.json(
        { success: false, error: '파일 업로드에 실패했습니다' },
        { status: 500 }
      );
    }

    // Supabase에 스티커 정보 저장
    const stickerResult = await createSticker({
      title,
      description,
      category: englishCategory,
      tags,
      image_url: uploadResult.url!,
    });

    if (!stickerResult.success) {
      console.error('Supabase 저장 실패:', stickerResult.error);
      return NextResponse.json(
        { success: false, error: '스티커 정보 저장에 실패했습니다' },
        { status: 500 }
      );
    }

    console.log('스티커 업로드 성공:', {
      stickerId: stickerResult.sticker?.id,
      fileName: file.name,
      s3Url: uploadResult.url,
      category: englishCategory,
      originalCategory: category,
      userId: user.id,
      optimization: uploadResult.optimizationInfo,
    });

    return NextResponse.json({
      success: true,
      message: '스티커가 성공적으로 업로드되었습니다',
      stickerId: stickerResult.sticker?.id,
      imageUrl: uploadResult.url,
      optimization: uploadResult.optimizationInfo,
    });

  } catch (error) {
    console.error('업로드 에러:', error);
    return NextResponse.json(
      { success: false, error: '업로드 중 오류가 발생했습니다' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: '스티커 업로드 API',
    methods: ['POST']
  });
}
