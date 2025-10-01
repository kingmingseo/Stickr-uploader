'use client';

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Button from './ui/Button';
import Input from './ui/Input';

interface StickerUploadProps {
  onUpload: (data: {
    file: File;
    title: string;
    description: string;
    category: string;
  }) => void;
  isLoading?: boolean;
}

export default function StickerUpload({ onUpload, isLoading = false }: StickerUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: ''
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    multiple: false,
    maxFiles: 1
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length > 0 && formData.title && formData.category) {
      onUpload({
        file: files[0],
        title: formData.title,
        description: formData.description,
        category: formData.category
      });
    }
  };

  const removeFile = () => {
    setFiles([]);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">스티커 업로드</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 파일 업로드 영역 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            스티커 이미지
          </label>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <input {...getInputProps()} />
            <div className="space-y-4">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="text-lg text-gray-600">
                  {isDragActive ? '파일을 여기에 놓으세요' : '파일을 드래그하거나 클릭하여 선택하세요'}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  PNG, JPG, GIF, WEBP 파일만 지원됩니다 (최대 5MB)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 선택된 파일 표시 */}
        {files.length > 0 && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-900">{files[0].name}</p>
                  <p className="text-xs text-gray-500">{(files[0].size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <button
                type="button"
                onClick={removeFile}
                className="text-red-600 hover:text-red-800"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* 폼 필드들 */}
        <Input
          label="스티커 제목"
          name="title"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          placeholder="스티커 제목을 입력하세요"
          required
          disabled={isLoading}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            카테고리
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
            disabled={isLoading}
          >
            <option value="">카테고리를 선택하세요</option>
            <option value="emotion">감정</option>
            <option value="animal">동물</option>
            <option value="food">음식</option>
            <option value="character">캐릭터</option>
            <option value="other">기타</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            설명 (선택사항)
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            placeholder="스티커에 대한 설명을 입력하세요"
            rows={3}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            disabled={isLoading}
          />
        </div>

        <Button
          type="submit"
          isLoading={isLoading}
          className="w-full"
          disabled={files.length === 0 || !formData.title || !formData.category || isLoading}
        >
          {isLoading ? '업로드 중...' : '스티커 업로드'}
        </Button>
      </form>
    </div>
  );
}
