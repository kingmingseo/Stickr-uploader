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
    <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
      <div className="flex items-start space-x-4">
        {/* 파일 미리보기 */}
        <FilePreview
          file={file}
          onRemove={onRemove}
          disabled={disabled}
        />

        {/* 폼 필드들 */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-900">
              파일 {index + 1}
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="스티커 제목 *"
              value={formData.title}
              onChange={(e) => onUpdateFormData('title', e.target.value)}
              placeholder="스티커 제목을 입력하세요"
              required
              disabled={disabled}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                카테고리 *
              </label>
              <select
                value={formData.category}
                onChange={(e) => onUpdateFormData('category', e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              설명
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => onUpdateFormData('description', e.target.value)}
              placeholder="스티커에 대한 설명을 입력하세요"
              rows={2}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
