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
      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
        </svg>
        태그
      </label>
      
      {/* 태그 목록 */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              {tag}
              <button
                type="button"
                onClick={() => onRemoveTag(tag)}
                disabled={disabled}
                className="ml-2 hover:bg-white/20 rounded-full p-0.5 disabled:opacity-50 transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </span>
          ))}
        </div>
      )}
      
      {/* 태그 입력 */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="태그를 입력하고 Enter를 누르세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white hover:border-gray-300 transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
          disabled={disabled}
        />
        <button
          type="button"
          onClick={handleAddClick}
          disabled={disabled || !inputValue.trim()}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-200 transform active:scale-95"
        >
          추가
        </button>
      </div>
    </div>
  );
}

