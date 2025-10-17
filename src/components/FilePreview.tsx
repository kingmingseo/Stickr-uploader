import React from "react";
import Image from "next/image";

interface FilePreviewProps {
  file: File;
  onRemove: () => void;
  disabled?: boolean;
}

export default function FilePreview({
  file,
  onRemove,
  disabled = false,
}: FilePreviewProps) {
  return (
    <div className="flex-shrink-0 group">
      <div className="relative">
        <div className="w-32 h-32 bg-gray-300 border-2 border-gray-200 rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
          <Image
            src={URL.createObjectURL(file)}
            alt={file.name}
            width={128}
            height={128}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            unoptimized
          />
        </div>
        <button
          type="button"
          onClick={onRemove}
          disabled={disabled}
          className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-110"
          title="제거"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="mt-3 w-32">
        <p
          className="text-xs text-gray-700 font-medium truncate"
          title={file.name}
        >
          {file.name}
        </p>
        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          {(file.size / 1024 / 1024).toFixed(2)} MB
        </p>
      </div>
    </div>
  );
}

