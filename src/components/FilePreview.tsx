import React from 'react';

interface FilePreviewProps {
  file: File;
  onRemove: () => void;
  disabled?: boolean;
}

export default function FilePreview({ file, onRemove, disabled = false }: FilePreviewProps) {
  return (
    <div className="flex-shrink-0">
      <div className="w-20 h-20 bg-white border border-gray-200 rounded-lg overflow-hidden">
        <img
          src={URL.createObjectURL(file)}
          alt={file.name}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-xs text-gray-500 mt-1 truncate w-20">
        {file.name}
      </p>
      <p className="text-xs text-gray-400">
        {(file.size / 1024 / 1024).toFixed(2)} MB
      </p>
      <button
        type="button"
        onClick={onRemove}
        disabled={disabled}
        className="text-red-600 hover:text-red-800 text-xs disabled:opacity-50"
      >
        제거
      </button>
    </div>
  );
}
