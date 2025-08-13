# Post Test App

Ignite 보일러플레이트를 기반으로 한 React Native + TypeScript 모바일 앱 개발 실험 프로젝트입니다.

### 📁 폴더 구조

```
app/
├── domain/                 # 도메인 레이어 (비즈니스 로직)
│   ├── models/            # 도메인 모델 (Post, User 등)
│   └── repositories/      # Repository 인터페이스
├── infrastructure/        # 인프라 레이어 (외부 연동)
│   ├── api/              # API 클라이언트
│   ├── di/               # DI 컨테이너 (tsyringe)
│   ├── mappers/          # DTO ↔ Domain 변환
│   └── repositories/     # Repository 구현체
├── stores/               # 상태 관리 (Zustand)
├── screens/              # 화면 컴포넌트
├── components/           # 재사용 컴포넌트
├── navigators/           # 네비게이션
├── utils/                # 유틸리티 (logger 등)
├── theme/                # 테마 시스템
└── config/               # 환경 설정
```

### 🎯 핵심 특징

- **Clean Architecture**: 레이어별 의존성 분리로 변경 영향 최소화
- **DDD**: Domain Model로 비즈니스 로직 중앙화
- **DI Container**: tsyringe 기반 의존성 주입
- **Type Safety**: TypeScript strict mode 적용
- **개발자 경험**: Reactotron 기반 로깅 시스템

## 🛠️ 기술 스택

### Core

- **React Native 0.79.5** + **Expo 53**
- **TypeScript**

### State Management & API

- **Zustand** - 상태 관리
- **Apisauce** - HTTP 클라이언트
- **tsyringe** - 의존성 주입

### API

- **[DummyJSON](https://dummyjson.com/docs)** - 테스트용 REST API

## 🚀 시작하기

### 필수 조건

- Node.js 18+
- npm or yarn
- React Native 개발 환경 설정

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run start

# 플랫폼별 실행
npm run android  # Android
npm run ios      # iOS
```

### 빌드

```bash
# 시뮬레이터용
npm run build:ios:sim
npm run build:android:sim

# 디바이스용
npm run build:ios:dev
npm run build:android:dev
```

## 📚 아키텍처 세부사항

### Domain Layer

```typescript
export class Post {
  get id(): string {
    return this._id
  }
  get title(): string {
    return this._title
  }
  // ... getter methods for encapsulation
}
```

### Infrastructure Layer

```typescript
// API DTO와 Domain Model 간 변환
export class PostMapper {
  static toDomain(dto: PostApiData): Post { ... }
  static toDomainList(dtos: PostApiData[]): Post[] { ... }
}
```

### DI Container

```typescript
// tsyringe 기반 의존성 주입
container.register("PostRepository", { useClass: PostRepositoryImpl })
```

### Store Layer

```typescript
// Zustand 기반 상태 관리
export const usePostStore = create<PostState>((set, get) => ({
  posts: [],
  fetchPosts: async () => { ... }
}))
```

### 로깅

```typescript
// 개발환경에서만 동작하는 로거
import { logger } from "@/utils/logger"

logger.apiSuccess("GET", "/posts", data)
logger.error("POST_ERROR", "API 호출 실패", error)
```

## 📖 참고 자료

- [Ignite CLI Documentation](https://github.com/infinitered/ignite)
- [DummyJSON API Documentation](https://dummyjson.com/docs)
- [tsyringe Documentation](https://github.com/microsoft/tsyringe)
- [Zustand Documentation](https://github.com/pmndrs/zustand)

---
