
# 뉴스 웹사이트 - ISR + SPA와 스켈레톤 로딩
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat&logo=next.js)](https://nextjs.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/) [![Zustand](https://img.shields.io/badge/Zustand-Latest-orange?style=flat)](https://github.com/pmndrs/zustand) [![pnpm](https://img.shields.io/badge/pnpm-7.10.0-blue?style=flat)](https://pnpm.io/) [![Vercel](https://img.shields.io/badge/Vercel-Deployed-green?style=flat)](https://vercel.com/)

Next.js App Router와 증분 정적 재생성 (ISR), 싱글 페이지 애플리케이션 (SPA) 기능 및 최적화된 사용자 경험을 위한 스켈레톤 로딩을 활용한 현대적이고 성능이 뛰어난 뉴스 웹사이트입니다.

## 📑 목차

1.  [핵심 기능](#%ED%95%B5%EC%8B%AC-%EA%B8%B0%EB%8A%A5)
2.  [기술 스택](#%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%83%9D)
3.  [설치 방법](#%EC%84%A4%EC%B9%98-%EB%B0%A9%EB%B2%95)
4.  [핵심 구현](#%ED%95%B5%EC%8B%AC-%EA%B5%AC%ED%98%84)
    -   [ISR 설정](#isr-%EC%84%A4%EC%A0%95)
    -   [스켈레톤 로딩](#%EC%8A%A4%EC%BC%88%EB%A0%88%ED%86%A4-%EB%A1%9C%EB%94%A9)
5.  [핵심 구현 세부사항](#%ED%95%B5%EC%8B%AC-%EA%B5%AC%ED%98%84-%EC%84%B8%EB%B6%80%EC%82%AC%ED%95%AD)
6.  [배운 점과 해결 방법](#%EB%B0%B0%EC%9A%B4-%EC%A0%90%EA%B3%BC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95)
7.  [향후 개선 사항](#%ED%96%A5%ED%9B%84-%EA%B0%9C%EC%84%A0-%EC%82%AC%ED%95%AD)
8.  [기여](#%EA%B8%B0%EC%97%AC)
9.  [라이선스](#%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4)
10.  [연락처](#%EC%97%B0%EB%9D%BD%EC%B2%98)

## 핵심 기능

-   **증분 정적 재생성 (ISR)**
    
    -   60초마다 정적 페이지 자동 재생성
    -   성능과 콘텐츠 신선도 균형
    -   서버 로드 및 전달 최적화
-   **싱글 페이지 애플리케이션 (SPA)**
    
    -   클라이언트 사이드 네비게이션
    -   전체 페이지 새로 고침 없음
    -   향상된 사용자 경험
-   **스켈레톤 로딩**
    
    -   세련된 로딩 상태 표시
    -   로딩 시간 지각 감소
    -   매끄러운 콘텐츠 전환
-   **스마트 페이지네이션**
    
    -   동적 기사 페이지네이션
    -   사용자 정의 페이지당 항목 수
    -   직관적인 네비게이션 컨트롤
-   **반응형 디자인**
    
    -   모바일 우선 접근
    -   적응형 레이아웃
    -   모든 장치 호환성

## 기술 스택

-   **프론트엔드 프레임워크:** Next.js (App Router)
-   **상태 관리:** Zustand
-   **스타일링:** Tailwind CSS
-   **데이터 소스:** 뉴스 API
-   **배포:** Vercel

## 설치 방법

1.  **저장소 클론하기**

```bash
git clone https://github.com/your-username/news-web.git
cd news-web

```

2.  **의존성 설치**

```bash
npm install
# 또는
yarn install

```

3.  **환경 변수 설정** 루트 디렉터리에 `.env.local` 파일 생성:

```env
NEXT_PUBLIC_NEWS_API_KEY=your_newsapi_key

```

4.  **개발 서버 시작**

```bash
npm run dev
# 또는
yarn dev

```

5.  **애플리케이션 확인** [http://localhost:3000](http://localhost:3000/)에서 애플리케이션을 확인하세요.

## 핵심 구현

### ISR 설정

```tsx
export const revalidate = 60; // 60초마다 재검증

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const newsPromise = fetchNews(params.category);
  return (
    <Suspense fallback={<SkeletonLoader />}>
      <PaginatedNewsWrapper newsPromise={newsPromise} />
    </Suspense>
  );
}

```

### 스켈레톤 로딩

```tsx
export default function SkeletonLoader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="bg-gray-200 animate-pulse rounded p-4">
          <div className="h-48 bg-gray-300 rounded mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
}

```

## 핵심 구현 세부사항

### 상태 관리

-   상태 관리를 위해 Zustand를 사용
-   페이지네이션 및 필터를 위한 중앙 집중식 저장소
-   최소한의 리렌더링으로 효율적인 업데이트

### 반응형 디자인

-   Tailwind CSS를 활용한 모바일 우선 디자인
-   다양한 장치에 맞는 최적화된 레이아웃

### 성능 최적화

-   Next.js `Image` 컴포넌트를 사용하여 이미지 최적화
-   화면에 보이지 않는 콘텐츠의 지연 로딩
-   번들 사이즈 최소화

## 배운 점과 해결 방법

1.  **콘텐츠 신선도와 성능의 균형**
    
    -   ISR과 60초 재검증 주기를 사용하여 서버 부하를 최소화하면서 신선한 콘텐츠를 제공.
2.  **로딩 경험 개선**
    
    -   스켈레톤 로딩을 구현하여 로딩 시간을 단축하고 더 부드러운 사용자 경험을 제공.
3.  **모바일 반응형 디자인**
    
    -   모바일 우선 디자인 접근법과 Tailwind CSS 브레이크포인트로 다양한 화면 크기에 최적화된 디자인 제공.
4.  **이미지 최적화**
    
    -   Next.js의 `Image` 컴포넌트를 사용하여 이미지 로딩 속도 및 LCP 최적화.

## 향후 개선 사항

-   **검색 기능 개선:** 고급 필터링, 실시간 제안 및 검색 기록 기능 추가.
-   **사용자 기능:** 인증 시스템, 개인화된 뉴스 피드, 저장된 기사 기능.
-   **성능 개선:** 서비스 워커 통합, 오프라인 지원, 푸시 알림 기능.
-   **UI/UX 개선:** 다크 모드, 읽기 시간 추정, 공유 기능 개선.

## 기여

1.  저장소를 포크하세요.
2.  기능 브랜치를 만드세요: `git checkout -b feature/AmazingFeature`.
3.  변경 사항을 커밋하세요: `git commit -m 'Add AmazingFeature'`.
4.  브랜치를 푸시하세요: `git push origin feature/AmazingFeature`.
5.  Pull Request를 열어주세요.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 라이선스가 부여되었습니다 - [LICENSE](https://chatgpt.com/c/LICENSE) 파일을 참조하세요.

## 연락처

-   **프로젝트 저장소:** [GitHub 링크](https://github.com/your-username/news-website)
-   **이메일:** [bongchannavong@outlook.com](mailto:bongchannavong@outlook.com)
