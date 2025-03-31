# Mobile Web App Project Structure / Cấu trúc dự án Mobile Web App

## Technology Stack / Stack công nghệ
- **Frontend Framework**: Vite + React
- **Mock API**: JSON Server + MSW (Mock Service Worker)
- **UI Framework**: Antd Mobile
- **State Management**: Zustand/Jotai
- **Authentication**: Mock Auth with MSW
- **Local Storage**: localStorage/IndexedDB

## Project Structure / Cấu trúc thư mục
```
src/
├── assets/              # Static assets (images, icons, etc.)
│   ├── icons/          # SVG icons
│   └── images/         # Images
├── components/          # Reusable components
│   ├── common/         # Common UI components
│   │   ├── Button/
│   │   ├── Card/
│   │   └── Input/
│   ├── layout/         # Layout components
│   │   ├── Header/
│   │   ├── TabBar/
│   │   └── Container/
│   └── features/       # Feature-specific components
├── pages/              # Page components
│   ├── auth/          # Authentication pages
│   ├── home/          # Home page
│   ├── profile/       # User profile
│   └── settings/      # App settings
├── hooks/              # Custom React hooks
│   ├── useAuth.ts
│   ├── useTheme.ts
│   └── useApi.ts
├── stores/             # State management
│   ├── authStore.ts
│   └── appStore.ts
├── mocks/              # Mock API definitions
│   ├── handlers/      # MSW API handlers
│   ├── data/         # Mock JSON data
│   └── browser.ts    # MSW browser setup
├── services/           # API services
│   └── api/          # API client and endpoints
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
│   ├── storage.ts
│   ├── format.ts
│   └── validation.ts
└── config/             # Configuration files
    ├── theme.ts
    └── constants.ts

mock-api/              # JSON Server directory
└── db.json            # Mock database file
```

## Core Features / Tính năng chính
1. User Interface / Giao diện người dùng
   - Mobile-first design
   - Responsive layouts
   - Dark/Light theme
   - Smooth animations

2. Authentication / Xác thực
   - Login/Register
   - Password recovery
   - Session management

3. Core Functionality / Chức năng cốt lõi
   - Offline support
   - Push notifications
   - Data caching
   - File upload

4. User Experience / Trải nghiệm người dùng
   - Gesture controls
   - Pull to refresh
   - Infinite scrolling
   - Loading states

## Dependencies / Các dependency chính
```json
{
  "dependencies": {
    "react": "latest",
    "react-dom": "latest",
    "react-router-dom": "latest",
    "antd-mobile": "latest",
    "zustand": "latest",
    "axios": "latest",
    "typescript": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest"
  },
  "devDependencies": {
    "vite": "latest",
    "json-server": "^0.17.4",
    "msw": "^2.0.0",
    "@vitejs/plugin-react": "latest",
    "sass": "latest"
  }
}
```

## Development Setup / Thiết lập môi trường phát triển

### Scripts / Các lệnh
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "mock-api": "json-server --watch mock-api/db.json --port 3001"
  }
}
```

### Environment Variables / Biến môi trường
```env
VITE_API_URL=http://localhost:3001
VITE_MOCK_API=true
```

## Mobile-First Design Guidelines / Hướng dẫn thiết kế Mobile-First
1. Viewport Configuration
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

2. Base Styles
```scss
:root {
  --safe-area-inset-top: env(safe-area-inset-top);
  --safe-area-inset-bottom: env(safe-area-inset-bottom);
}

.app-container {
  padding-top: var(--safe-area-inset-top);
  padding-bottom: var(--safe-area-inset-bottom);
}
```

## Getting Started / Bắt đầu
1. Clone repository
2. Install dependencies: `npm install`
3. Create mock data in `mock-api/db.json`
4. Start mock API: `npm run mock-api`
5. Start development server: `npm run dev`

## Best Practices / Quy tắc thực hành
1. Mobile-first approach
2. Progressive enhancement
3. Offline-first design
4. Performance optimization
5. Accessibility standards
6. Clean code principles

## Performance Considerations / Vấn đề hiệu suất
1. Code splitting
2. Lazy loading
3. Image optimization
4. Cache management
5. Bundle size optimization
