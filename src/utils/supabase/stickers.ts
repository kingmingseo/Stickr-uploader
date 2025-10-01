import { createClient } from './server';
import { Sticker } from '@/types/sticker';

export interface CreateStickerParams {
  title: string;
  description: string;
  category: string;
  tags: string[];
  image_url: string;
}

export interface StickerInsertResult {
  success: boolean;
  sticker?: Sticker;
  error?: string;
}

/**
 * 스티커를 데이터베이스에 저장합니다
 */
export async function createSticker(
  params: CreateStickerParams
): Promise<StickerInsertResult> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('sticker')
      .insert([
        {
          title: params.title,
          description: params.description,
          category: params.category,
          tags: params.tags,
          image_url: params.image_url,
          like_count: 0, // 기본 좋아요 수
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase insert 에러:', error);
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
      sticker: data as Sticker,
    };
  } catch (error) {
    console.error('스티커 생성 에러:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : '스티커 생성 실패',
    };
  }
}

/**
 * 모든 스티커 목록을 조회합니다
 */
export async function getAllStickers(): Promise<{
  success: boolean;
  stickers?: Sticker[];
  error?: string;
}> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('sticker')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase select 에러:', error);
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
      stickers: data as Sticker[],
    };
  } catch (error) {
    console.error('스티커 조회 에러:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : '스티커 조회 실패',
    };
  }
}

/**
 * 스티커 좋아요 수를 업데이트합니다
 */
export async function updateStickerLikeCount(
  stickerId: string,
  likeCount: number
): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const supabase = await createClient();

    const { error } = await supabase
      .from('sticker')
      .update({ 
        like_count: likeCount,
        updated_at: new Date().toISOString(),
      })
      .eq('id', stickerId);

    if (error) {
      console.error('Supabase update 에러:', error);
      return {
        success: false,
        error: error.message,
      };
    }

    return { success: true };
  } catch (error) {
    console.error('스티커 좋아요 수 업데이트 에러:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : '스티커 좋아요 수 업데이트 실패',
    };
  }
}
