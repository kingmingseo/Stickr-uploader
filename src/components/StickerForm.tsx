import React from 'react';
import Input from './ui/Input';
import TagInput from './TagInput';
import FilePreview from './FilePreview';
import { StickerFormData } from '../types/sticker';
import { categoryOptions } from '../constants/categories';

interface StickerFormProps {
  file: File;
  formData: StickerFormData;
  index: number;
  onUpdateFormData: (field: keyof StickerFormData, value: string | string[]) => void;
  onRemove: () => void;
  disabled?: boolean;
}

export default function StickerForm({
  file,
  formData,
  index,
  onUpdateFormData,
  onRemove,
  disabled = false
}: StickerFormProps) {
  const handleAddTag = (tag: string) => {
    if (!formData.tags.includes(tag)) {
      onUpdateFormData('tags', [...formData.tags, tag]);
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    onUpdateFormData('tags', formData.tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="border-2 border-gray-200 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start space-x-6">
        {/* 파일 미리보기 */}
        <FilePreview
          file={file}
          onRemove={onRemove}
          disabled={disabled}
        />

        {/* 폼 필드들 */}
        <div className="flex-1 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-gray-200">
            <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-sm rounded-lg font-bold">
                {index + 1}
              </span>
              파일 정보
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              label="스티커 제목 *"
              value={formData.title}
              onChange={(e) => onUpdateFormData('title', e.target.value)}
              placeholder="스티커 제목을 입력하세요"
              required
              disabled={disabled}
            />

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                카테고리 *
              </label>
              <select
                value={formData.category}
                onChange={(e) => onUpdateFormData('category', e.target.value)}
                className="block w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white hover:border-gray-300 transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
                required
                disabled={disabled}
              >
                <option value="">카테고리를 선택하세요</option>
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              설명
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => onUpdateFormData('description', e.target.value)}
              placeholder="스티커에 대한 설명을 입력하세요"
              rows={3}
              className="block w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white hover:border-gray-300 transition-all duration-200 resize-none disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
              disabled={disabled}
            />
          </div>

          {/* 태그 입력 */}
          <TagInput
            tags={formData.tags}
            onAddTag={handleAddTag}
            onRemoveTag={handleRemoveTag}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
}

