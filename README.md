
## 🏗️ Architecture

This project uses **Feature-Sliced Design (FSD)** - a methodology for organizing frontend projects that promotes maintainability, scalability, and developer experience.

### FSD Layers

```
src/
├── app/           # App-level configuration and providers
├── pages/         # Route components (future expansion)
├── widgets/       # Large UI blocks with business logic
├── features/      # User-facing functionality
├── entities/      # Business entities and their logic
└── shared/        # Reusable UI components and utilities
```

### Codebase Structure

```
src/
├── app/
│   └── index.css          # Global styles
├── entities/
│   └── posts/             # Post business logic
│       ├── api/           # API calls
│       ├── hooks/         # Custom hooks
│       └── types.ts       # Type definitions
├── features/
│   ├── log-in/            # Login functionality
│   └── sign-up/           # Signup functionality
├── shared/
│   ├── ui/                # Reusable UI components
│   ├── icons/             # Icon components
│   ├── lib/               # Utility functions
│   └── utils/             # Helper hooks
└── widgets/
    ├── auth/              # Authentication widget
    ├── header/            # Header component
    ├── post-list/         # Post list display
    └── post-list-editor/  # Post creation editor
```
