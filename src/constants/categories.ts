export const categoriesMap: Record<string, string> = {
  전체: '전체',
  손글씨: 'handwriting',
  도트: 'dot',
  말풍선: 'speech-bubble',
  캐릭터: 'character',
  이모지: 'emoji',
  음식: 'food',
  장식: 'decoration',
};

// 한국어 → 영어 변환
export function getEnglishCategory(koreanCategory: string): string {
  return categoriesMap[koreanCategory] || koreanCategory;
}

// 영어 → 한국어 변환
export function getKoreanCategory(englishCategory: string): string {
  const koreanCategory = Object.keys(categoriesMap).find(
    key => categoriesMap[key] === englishCategory
  );
  return koreanCategory || englishCategory;
}

// 카테고리 옵션 배열 (한국어)
export const categoryOptions = Object.keys(categoriesMap).filter(
  key => key !== '전체'
);
