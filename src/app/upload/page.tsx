"use client";

import React, { useState } from "react";
import axios from "axios";
import MultiStickerUpload from "@/components/MultiStickerUpload";
import { MultiStickerUploadData } from "@/types/sticker";

export default function UploadPage() {
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (data: MultiStickerUploadData) => {
    setIsUploading(true);

    try {
      // 각 스티커를 순차적으로 업로드
      const uploadPromises = data.stickers.map(async (sticker) => {
        const formData = new FormData();
        formData.append("file", sticker.file);
        formData.append("title", sticker.formData.title);
        formData.append("description", sticker.formData.description);
        formData.append("category", sticker.formData.category);
        formData.append("tags", JSON.stringify(sticker.formData.tags));

        const response = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        return response.data;
      });

      const results = await Promise.all(uploadPromises);

      const successCount = results.filter((result) => result.success).length;
      const failCount = results.length - successCount;

      if (successCount > 0) {
        alert(
          `${successCount}개 스티커가 성공적으로 업로드되었습니다!${
            failCount > 0 ? ` (${failCount}개 실패)` : ""
          }`
        );
        window.location.reload();
      } else {
        alert("업로드 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("업로드 에러:", error);
      alert("업로드 중 오류가 발생했습니다.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">스티커 업로드</h1>
      <MultiStickerUpload onUpload={handleUpload} isLoading={isUploading} />
    </div>
  );
}
