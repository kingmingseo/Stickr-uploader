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
      className={`relative border-3 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 group ${
        isDragActive 
          ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl scale-[1.02]' 
          : 'border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50/30 shadow-lg'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <input {...getInputProps()} disabled={disabled} />
      
      {/* 배경 장식 */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className="absolute top-4 right-4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
      </div>

      <div className="space-y-6 relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
          <svg className={`h-10 w-10 transition-colors duration-300 ${isDragActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-500'}`} stroke="currentColor" fill="none" viewBox="0 0 48 48">
            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-xl font-semibold text-gray-700 mb-2">
            {isDragActive ? '파일들을 여기에 놓으세요! 🎯' : '파일을 드래그하거나 클릭하여 선택하세요'}
          </p>
          <p className="text-sm text-gray-500">
            PNG, JPG, GIF, WEBP 파일만 지원됩니다
          </p>
          <p className="text-xs text-gray-400 mt-1">
            최대 5MB · 최대 10개
          </p>
        </div>
      </div>
    </div>
  );
}
