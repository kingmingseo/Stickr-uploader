import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { stickerId, action } = await request.json();

    if (!stickerId || !action) {
      return NextResponse.json(
        { error: 'stickerId와 action이 필요합니다' },
        { status: 400 }
      );
    }

    if (!['approve', 'reject'].includes(action)) {
      return NextResponse.json(
        { error: 'action은 approve 또는 reject여야 합니다' },
        { status: 400 }
      );
    }

    // TODO: 실제 승인/거부 로직 구현
    // 1. 데이터베이스에서 스티커 상태 업데이트
    // 2. 승인된 경우 공개 상태로 변경
    // 3. 거부된 경우 삭제 또는 비공개 처리

    console.log('승인 요청:', {
      stickerId,
      action,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: `스티커가 ${action === 'approve' ? '승인' : '거부'}되었습니다`,
      stickerId,
      action
    });

  } catch (error) {
    console.error('승인 처리 에러:', error);
    return NextResponse.json(
      { error: '승인 처리 중 오류가 발생했습니다' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: '스티커 승인 API',
    methods: ['POST']
  });
}
