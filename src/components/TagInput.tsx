import React, { useState } from 'react';

interface TagInputProps {
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
  disabled?: boolean;
}

export default function TagInput({ tags, onAddTag, onRemoveTag, disabled = false }: TagInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputValue.trim() && !tags.includes(inputValue.trim())) {
        onAddTag(inputValue.trim());
        setInputValue('');
      }
    }
  };

  const handleAddClick = () => {
    if (inputValue.trim() && !tags.includes(inputValue.trim())) {
      onAddTag(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        태그
      </label>
      
      {/* 태그 목록 */}
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
          >
            {tag}
            <button
              type="button"
              onClick={() => onRemoveTag(tag)}
              disabled={disabled}
              className="ml-1 text-blue-600 hover:text-blue-800 disabled:opacity-50"
            >
              ×
            </button>
          </span>
        ))}
      </div>
      
      {/* 태그 입력 */}
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="태그를 입력하고 Enter를 누르세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          disabled={disabled}
        />
        <button
          type="button"
          onClick={handleAddClick}
          disabled={disabled || !inputValue.trim()}
          className="px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          추가
        </button>
      </div>
    </div>
  );
}
