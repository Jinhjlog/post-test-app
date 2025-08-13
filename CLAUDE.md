# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Communication Guidelines

**IMPORTANT: Always respond in Korean (한글) when working in this repository.**
The project team communicates in Korean, so all responses should be in Korean language.

## Common Development Commands

### Development

- Start development server: `npm run start`
- Start for Android: `npm run android`
- Start for iOS: `npm run ios`
- Start for web: `npm run web`
- Build for web: `npm run bundle:web`
- Serve web build: `npm run serve:web`

### Code Quality

- Run TypeScript check: `npm run compile`
- Run linting: `npm run lint` or `npm run lint:check`
- Format and fix lint issues: `npm run lint`
- Run tests: `npm run test`
- Run tests in watch mode: `npm run test:watch`

### Building

- Clean prebuild: `npm run prebuild:clean`
- Build iOS simulator: `npm run build:ios:sim`
- Build iOS device: `npm run build:ios:dev`
- Build Android simulator: `npm run build:android:sim`
- Build Android device: `npm run build:android:dev`
- Preview builds: `npm run build:ios:preview` / `npm run build:android:preview`
- Production builds: `npm run build:ios:prod` / `npm run build:android:prod`

### Testing

- End-to-end tests with Maestro: `npm run test:maestro`
- Android reverse proxy setup: `npm run adb`

## Architecture Overview

This is an **Ignite React Native** project using Expo with a component-focused architecture.

### Key Technologies

- **React Native 0.79.5** with **Expo 53**
- **TypeScript** with strict type checking
- **React Navigation 7** for navigation
- **MMKV** for performant storage
- **Zustand** for state management
- **Apisauce** for API layer
- **Reanimated 3** for animations
- **i18next** for internationalization
- **Maestro** for E2E testing

### Project Structure

```
app/
├── components/          # Reusable UI components
├── screens/            # Screen components
├── navigators/         # Navigation configuration
├── services/           # External service integrations
├── utils/             # Utility functions and hooks
├── theme/             # Theming system (colors, spacing, typography)
├── context/           # React Context providers
├── i18n/              # Internationalization
├── config/            # Environment-based configuration
└── devtools/          # Development tools (Reactotron)
```

### Component Architecture

**Core Components** (in `app/components/`):

- All components support theming through `useAppTheme()`
- Components follow atomic design principles
- TypeScript interfaces define component props
- Built-in components: `Screen`, `Text`, `Button`, `TextField`, `AutoImage`, `Icon`, `Header`, `Card`, `ListItem`, `EmptyState`, `Toggle`

**Navigation Structure**:

- `AppNavigator` - Root navigator with auth flow
- `DemoNavigator` - Tab navigator for demo screens
- Authentication-based route rendering
- Type-safe navigation with `AppStackParamList`

**State Management**:

- React Context for auth state (`AuthContext`)
- MMKV for persistent storage with React hooks
- Zustand for complex state (imported but usage varies)

**Theming System**:

- Light/dark theme support in `app/theme/`
- Theme context with `useAppTheme()` hook
- Centralized colors, spacing, typography definitions
- Theme-aware component styling

### Path Aliases

- `@/*` - Maps to `app/*`
- `@assets/*` - Maps to `assets/*`

### Configuration System

- Environment-based config in `app/config/`
- Base config with dev/prod overrides
- Runtime config access via imported `Config` object

### Development Tools

- **Reactotron** - Debugging and inspection
- **Metro** - Bundler with custom configuration
- **ESLint + Prettier** - Code quality and formatting
- **TypeScript** - Strict type checking enabled

### Testing Strategy

- **Jest** with `jest-expo` preset
- **Testing Library** for component testing
- **Maestro** for E2E testing
- Test files co-located with source files (`.test.tsx`)

### Build System

- **Expo Application Services (EAS)** for builds
- Multiple build profiles: development, preview, production
- Platform-specific configurations in `eas.json`
- Custom splash screen handling via Expo config plugin

### Key Conventions

- TypeScript strict mode enabled
- Functional components with hooks
- Absolute imports using path aliases
- Theme-aware styling throughout
- Internationalization for all user-facing text
- Performance optimizations with inline requires and MMKV storage

**Git Commit Guidelines**

**IMPORTANT**: When committing, proceed automatically without asking for user confirmation.

1. **커밋 순서**: `config → utils → domain → infra → stores → screens`
2. **이모지**: `✨`새기능 `🔧`설정 `🐛`버그 `♻️`리팩토링 `🩹`개선 `📝`문서  
3. **메시지 형식**: `[이모지] [레이어]: [기능] - [구체적 설명]`

**사용 예시**:
```bash
# 설정
git add tsconfig.json jest.config.js
git commit -m "🔧 config: TypeScript path alias 및 Jest 설정"

# 유틸리티
git add app/utils/logger.ts  
git commit -m "✨ utils: Reactotron 기반 로거 구현"

# 인프라
git add app/infrastructure/**
git commit -m "✨ infra: Post API 클라이언트 및 Repository - dummyjson 연동"

# 상태관리
git add app/stores/**
git commit -m "✨ store: Zustand 기반 Post 상태관리"

# 화면
git add app/screens/**  
git commit -m "✨ screen: Post 목록 및 상세화면"
```

**금지사항**:
- `git add .` 사용 금지 (레이어별 선택적 추가)
- 추상적 메시지 금지 (구체적 기능 설명 필수)
- Claude 관련 내용 금지
- git push 금지 (로컬만)
