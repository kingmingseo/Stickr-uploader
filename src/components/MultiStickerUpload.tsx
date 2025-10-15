'use client';

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Button from './ui/Button';
import DropzoneArea from './DropzoneArea';
import StickerForm from './StickerForm';
import { StickerFormData, MultiStickerUploadData } from '../types/sticker';
import { categoryOptions } from '../constants/categories';

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
    const newFiles: FileWithFormData[] = acceptedFiles.map(file => {
      // 파일명에서 확장자 제거
      const fileNameWithoutExt = file.name.replace(/\.[^/.]+$/, '');
      
      return {
        file,
        formData: {
          title: fileNameWithoutExt,
          description: fileNameWithoutExt,
          category: '',
          tags: [fileNameWithoutExt]
        },
        id: Math.random().toString(36).substr(2, 9)
      };
    });
    
    setFiles(prev => [...prev, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    multiple: true,
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

  const applyBulkCategory = (category: string) => {
    if (!category) return;
    setFiles(prev => prev.map(file => ({
      ...file,
      formData: { ...file.formData, category }
    })));
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
    <div className="max-w-5xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* 파일 업로드 영역 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            스티커 이미지 선택
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
          <div className="space-y-6 animate-fade-in">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 rounded-xl border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"/>
                    <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                  </svg>
                  선택된 파일
                </h3>
                <span className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-full">
                  {files.length}개
                </span>
              </div>
              
              {/* 일괄 카테고리 선택 */}
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-4 py-3 rounded-lg border border-blue-200/50">
                <label className="text-sm font-semibold text-gray-700 whitespace-nowrap flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                  </svg>
                  일괄 카테고리 적용
                </label>
                <select
                  onChange={(e) => applyBulkCategory(e.target.value)}
                  className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white hover:border-gray-300 transition-all duration-200 text-sm font-medium"
                  disabled={isLoading}
                  defaultValue=""
                >
                  <option value="">카테고리를 선택하세요</option>
                  {categoryOptions.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  모든 파일에 적용됩니다
                </span>
              </div>
            </div>
            
            <div className="grid gap-6">
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
          </div>
        )}

        {/* 업로드 버튼 */}
        {files.length > 0 && (
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              isLoading={isLoading}
              className="px-12 py-4 text-base"
              disabled={isLoading}
              size="lg"
            >
              {isLoading ? '업로드 중...' : `${files.length}개 스티커 업로드 🚀`}
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
