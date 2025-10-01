'use client';

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Button from './ui/Button';
import DropzoneArea from './DropzoneArea';
import StickerForm from './StickerForm';
import { StickerFormData, MultiStickerUploadData } from '../types/sticker';

interface MultiStickerUploadProps {
  onUpload: (data: MultiStickerUploadData) => void;
  isLoading?: boolean;
}

interface FileWithFormData {
  file: File;
  formData: StickerFormData;
  id: string;
}

export default function MultiStickerUpload({ onUpload, isLoading = false }: MultiStickerUploadProps) {
  const [files, setFiles] = useState<FileWithFormData[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles: FileWithFormData[] = acceptedFiles.map(file => ({
      file,
      formData: {
        title: '',
        description: '',
        category: '',
        tags: []
      },
      id: Math.random().toString(36).substr(2, 9)
    }));
    
    setFiles(prev => [...prev, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    multiple: true,
    maxFiles: 10,
    disabled: isLoading
  });

  const updateFormData = (fileId: string, field: keyof StickerFormData, value: string | string[]) => {
    setFiles(prev => prev.map(file => 
      file.id === fileId 
        ? { ...file, formData: { ...file.formData, [field]: value } }
        : file
    ));
  };

  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 모든 파일에 필수 정보가 입력되었는지 확인
    const incompleteFiles = files.filter(file => 
      !file.formData.title || !file.formData.category
    );
    
    if (incompleteFiles.length > 0) {
      alert('모든 파일에 제목과 카테고리를 입력해주세요.');
      return;
    }

    const uploadData: MultiStickerUploadData = {
      stickers: files.map(file => ({
        file: file.file,
        formData: file.formData
      }))
    };

    onUpload(uploadData);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">다중 스티커 업로드</h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* 파일 업로드 영역 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            스티커 이미지들 (최대 10개)
          </label>
          <DropzoneArea
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            isDragActive={isDragActive}
            disabled={isLoading}
          />
        </div>

        {/* 선택된 파일들과 각각의 폼 */}
        {files.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">
              선택된 파일들 ({files.length}개)
            </h3>
            
            {files.map((fileWithData, index) => (
              <StickerForm
                key={fileWithData.id}
                file={fileWithData.file}
                formData={fileWithData.formData}
                index={index}
                onUpdateFormData={(field, value) => updateFormData(fileWithData.id, field, value)}
                onRemove={() => removeFile(fileWithData.id)}
                disabled={isLoading}
              />
            ))}
          </div>
        )}

        {/* 업로드 버튼 */}
        {files.length > 0 && (
          <div className="flex justify-center">
            <Button
              type="submit"
              isLoading={isLoading}
              className="px-8 py-3"
              disabled={isLoading}
            >
              {isLoading ? '업로드 중...' : `${files.length}개 스티커 업로드`}
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
