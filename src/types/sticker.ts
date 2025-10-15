export interface Sticker {
  id: string;
  title: string;
  description: string;
  category: 'emotion' | 'animal' | 'food' | 'character' | 'other';
  status: 'pending' | 'approved' | 'rejected';
  image_url: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface CreateStickerData {
  title: string;
  description: string;
  category: string;
  file: File;
}

export interface StickerFilters {
  status?: 'pending' | 'approved' | 'rejected';
  category?: string;
  user_id?: string;
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
