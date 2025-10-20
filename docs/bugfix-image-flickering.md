# 이미지 프리뷰 깜빡임 문제 해결

## 📋 문제 설명

스티커 업로드 폼에서 카테고리를 선택하거나 다른 입력 필드를 변경할 때 이미지 프리뷰가 깜빡거리는 현상이 발생했습니다.

### 재현 단계
1. 파일을 업로드하여 이미지 프리뷰 표시
2. 카테고리 드롭다운을 클릭하거나 다른 입력 필드 변경
3. 이미지가 순간적으로 깜빡이며 다시 로드됨

## 🔍 원인 분석

### 기존 코드
```tsx
// FilePreview.tsx
export default function FilePreview({ file, onRemove, disabled }) {
  return (
    <Image
      src={URL.createObjectURL(file)}  // ❌ 매 렌더링마다 새로운 URL 생성
      alt={file.name}
      width={128}
      height={128}
      unoptimized
    />
  );
}
```

### 문제 발생 과정
1. 사용자가 카테고리를 변경
2. `StickerForm` 컴포넌트가 리렌더링됨
3. `FilePreview` 자식 컴포넌트도 리렌더링됨
4. `URL.createObjectURL(file)`이 새로운 Blob URL을 생성
5. Image 컴포넌트가 새 URL을 로드하면서 깜빡임 발생

### 핵심 원인
- `URL.createObjectURL()`은 호출될 때마다 새로운 URL을 반환
- React 리렌더링 시 동일한 파일이어도 새로운 URL이 생성되어 이미지가 재로드됨
- 추가 문제: 이전 URL이 정리되지 않아 메모리 누수 발생 가능

## ✅ 해결 방법

### 수정된 코드
```tsx
// FilePreview.tsx
import React, { useMemo, useEffect } from "react";
import Image from "next/image";

export default function FilePreview({ file, onRemove, disabled = false }) {
  // URL을 메모이제이션해서 파일이 변경되지 않으면 같은 URL 사용
  const imageUrl = useMemo(() => URL.createObjectURL(file), [file]);

  // 컴포넌트 언마운트 시 URL 정리
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

  return (
    <Image
      src={imageUrl}  // ✅ 메모이제이션된 URL 사용
      alt={file.name}
      width={128}
      height={128}
      unoptimized
    />
  );
}
```

### 적용된 해결책

#### 1. `useMemo`를 사용한 URL 메모이제이션
```tsx
const imageUrl = useMemo(() => URL.createObjectURL(file), [file]);
```
- 파일 객체가 변경되지 않는 한 동일한 URL을 재사용
- 불필요한 URL 생성 방지
- 리렌더링 시에도 같은 URL 유지

#### 2. `useEffect`를 사용한 메모리 정리
```tsx
useEffect(() => {
  return () => {
    URL.revokeObjectURL(imageUrl);
  };
}, [imageUrl]);
```
- 컴포넌트 언마운트 시 생성된 URL을 명시적으로 해제
- 메모리 누수 방지
- 브라우저 리소스 효율적 관리

## 📊 결과

### Before (수정 전)
- ❌ 카테고리 변경 시 이미지 깜빡임
- ❌ 폼 입력 시마다 이미지 재로드
- ❌ 메모리 누수 가능성

### After (수정 후)
- ✅ 부드러운 사용자 경험
- ✅ 불필요한 리렌더링 제거
- ✅ 메모리 효율적 관리
- ✅ 성능 최적화

## 🎓 학습 포인트

### React 렌더링 최적화
- 외부 리소스 생성은 `useMemo`나 `useEffect`로 관리
- 컴포넌트 리렌더링과 사이드 이펙트를 분리

### Blob URL 관리
- `URL.createObjectURL()`로 생성한 URL은 반드시 `URL.revokeObjectURL()`로 해제
- 메모리 누수 방지를 위한 정리 작업 필수

### 성능 최적화 패턴
```tsx
// ❌ 안티패턴: 렌더링마다 새로운 객체/URL 생성
<Component data={new Date()} />
<Image src={URL.createObjectURL(file)} />

// ✅ 좋은 패턴: 메모이제이션 활용
const data = useMemo(() => new Date(), []);
const imageUrl = useMemo(() => URL.createObjectURL(file), [file]);
```

## 📝 체크리스트

수정 시 확인해야 할 사항:
- [ ] `useMemo`로 URL 메모이제이션 적용
- [ ] `useEffect` cleanup 함수로 `URL.revokeObjectURL` 호출
- [ ] 의존성 배열에 `file` 포함
- [ ] 다른 컴포넌트에서도 유사한 패턴 적용 여부 확인

## 🔗 관련 파일

- `src/components/FilePreview.tsx` - 수정된 파일
- `src/components/StickerForm.tsx` - 부모 컴포넌트
- `src/components/MultiStickerUpload.tsx` - 최상위 컴포넌트

## 📚 참고 자료

- [React useMemo 공식 문서](https://react.dev/reference/react/useMemo)
- [URL.createObjectURL() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL)
- [URL.revokeObjectURL() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL)

---

**작성일**: 2025-01-17  
**버전**: 1.0  
**상태**: ✅ 해결 완료

