export interface Sticker {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string;
  tags: string[];
  like_count: number;
  auto_increment_id: number;
  created_at: string;
  updated_at: string;
}

export interface CreateStickerData {
  title: string;
  description: string;
  category: string;
  tags: string[];
  file: File;
}

export interface StickerFormData {
  title: string;
  description: string;
  category: string;
  tags: string[];
}

export interface MultiStickerUploadData {
  stickers: Array<{
    file: File;
    formData: StickerFormData;
  }>;
}

export interface StickerFilters {
  category?: string;
  tags?: string[];
}

export interface UploadResponse {
  success: boolean;
  message: string;
  stickerId?: string;
  error?: string;
}

export interface ApproveResponse {
  success: boolean;
  message: string;
  stickerId: string;
  action: 'approve' | 'reject';
  error?: string;
}
