# CPLT App - React TypeScript Firebase Application

A modern React application built with TypeScript, Tailwind CSS, and Firebase for authentication and data storage.

## Project Structure

```
project/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # UI component library
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── toaster.tsx
│   │   │   └── tooltip.tsx
│   │   └── PrivacyAgreement.tsx
│   ├── contexts/           # React context providers
│   │   └── AuthContext.tsx
│   ├── pages/              # Main application pages
│   │   ├── Dashboard.tsx
│   │   ├── LoginPage.tsx
│   │   ├── ChatPage.tsx
│   │   ├── ProgressPage.tsx
│   │   └── not-found.tsx
│   ├── lib/                # Utility functions
│   │   └── utils.ts
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   ├── index.css           # Global styles
│   ├── firebase.ts         # Firebase configuration
│   └── vite-env.d.ts       # TypeScript environment definitions
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── .env.example            # Environment variables template
```

## Features

- User authentication with Firebase (email/password)
- Privacy agreement acceptance flow
- Protected routes with authentication guards
- Dashboard with navigation to main features
- Chat interface with message handling
- Progress tracking page
- Responsive design with Tailwind CSS
- TypeScript for type safety
- React Router for navigation

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Firebase

Create a `.env` file in the root directory based on `.env.example`:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

To get these values:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Go to Project Settings > General
4. Scroll down to "Your apps" section
5. Click on the web app icon (</>)
6. Copy the configuration values

### 3. Enable Firebase Authentication

1. In Firebase Console, go to Authentication
2. Click "Get Started"
3. Enable "Email/Password" sign-in method

### 4. Enable Firestore (Optional)

1. In Firebase Console, go to Firestore Database
2. Click "Create database"
3. Choose production or test mode
4. Select a location

### 5. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 6. Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run typecheck` - Run TypeScript type checking

## Application Flow

1. **Login/Signup** - Users authenticate via Firebase
2. **Privacy Agreement** - First-time users must accept privacy terms
3. **Dashboard** - Main hub with navigation cards
4. **Chat** - Interactive chat interface
5. **Progress** - View statistics and activity

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router DOM** - Routing
- **Firebase** - Authentication and database
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **TanStack Query** - Data fetching and caching

## Component Architecture

### Authentication Context (`src/contexts/AuthContext.tsx`)
Manages user authentication state and provides auth methods throughout the app.

### Protected Routes
Routes are protected using the `ProtectedRoute` component that checks authentication and privacy acceptance.

### UI Components (`src/components/ui/`)
Reusable, styled components following a consistent design system.

## Customization

### Styling
Tailwind CSS classes are used throughout. Modify `tailwind.config.js` to customize the theme.

### Firebase Rules
Set up appropriate security rules in Firebase Console for production use.

## Troubleshooting

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check TypeScript errors: `npm run typecheck`

### Firebase Connection Issues
- Verify `.env` file has correct values
- Check Firebase project settings
- Ensure authentication is enabled in Firebase Console

### Module Not Found Errors
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check import paths match the folder structure

## License

Private project - All rights reserved
