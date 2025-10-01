import React from 'react';

interface DropzoneAreaProps {
  getRootProps: () => {
    onClick: () => void;
    onDragEnter: () => void;
    onDragLeave: () => void;
    onDragOver: (e: React.DragEvent) => void;
    onDrop: (e: React.DragEvent) => void;
  };
  getInputProps: () => {
    type: string;
    accept: string;
    multiple: boolean;
    disabled?: boolean;
  };
  isDragActive: boolean;
  disabled?: boolean;
}

export default function DropzoneArea({ 
  getRootProps, 
  getInputProps, 
  isDragActive, 
  disabled = false 
}: DropzoneAreaProps) {
  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
        isDragActive 
          ? 'border-blue-500 bg-blue-50' 
          : 'border-gray-300 hover:border-gray-400'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <input {...getInputProps()} disabled={disabled} />
      <div className="space-y-4">
        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div>
          <p className="text-lg text-gray-600">
            {isDragActive ? '파일들을 여기에 놓으세요' : '파일들을 드래그하거나 클릭하여 선택하세요'}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            PNG, JPG, GIF, WEBP 파일만 지원됩니다 (최대 5MB, 최대 10개)
          </p>
        </div>
      </div>
    </div>
  );
}
