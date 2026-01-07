# Luxz React Native Template

A production-ready React Native template built with Expo Router - **JavaScript only, no TypeScript!**

This template provides a solid foundation for building cross-platform mobile apps with modern navigation, theming, and pre-built components.

## Features

- **Expo Router** - File-based routing with tabs and modal navigation
- **Dark/Light Theme** - Built-in theme system with automatic color scheme detection
- **Pre-built Components** - Themed text, views, collapsible sections, and more
- **Navigation** - Bottom tabs navigation with haptic feedback
- **Cross-platform Icons** - SF Symbols on iOS, Material Icons on Android/Web
- **Animations** - React Native Reanimated with parallax scroll effects
- **Backend Ready** - Node.js + Express + MySQL server included
- **API Service** - Pre-configured API client for backend communication
- **JavaScript Only** - No TypeScript complexity, easier setup and maintenance

## Quick Start

### Using this template

You can use this template in several ways:

#### Option 1: Clone directly
```bash
git clone https://github.com/tentimesukulele/LuxzRNTemplate MyApp
cd MyApp
npm install
npx expo start
```

#### Option 2: Use as local template
```bash
npx create-expo-app MyApp --template file:///path/to/LuxzRNTemplate
cd MyApp
npm install
npx expo start
```

#### Option 3: Get it from GitHub directly (recomended)
```bash
npx create-expo-app MyApp --template https://github.com/tentimesukulele/LuxzRNTemplate
```

## Project Structure

```
├── app/                    # App screens (file-based routing)
│   ├── (tabs)/            # Tab navigator screens
│   │   ├── index.js       # Home screen
│   │   ├── explore.js     # Explore screen
│   │   └── _layout.js     # Tab layout
│   ├── _layout.js         # Root layout
│   └── modal.js           # Example modal screen
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── themed-text.js    # Themed text component
│   ├── themed-view.js    # Themed view component
│   └── ...
├── constants/            # App constants
│   └── theme.js         # Theme colors and fonts
├── hooks/               # Custom hooks
│   ├── use-color-scheme.js
│   └── use-theme-color.js
├── services/             # API services
│   └── api.js           # HTTP client for backend
├── server/              # Backend server (Node.js + Express)
│   ├── server.js        # Main server file
│   ├── .env            # Environment variables (commit this!)
│   ├── .env.example    # Example environment file
│   └── package.json    # Server dependencies
└── assets/             # Images, fonts, etc.
```

## Customization

### Theming
Edit `constants/theme.js` to customize colors and fonts:

```javascript
export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: '#0a7ea4',
    // ...
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: '#fff',
    // ...
  },
};
```

### Adding Screens
Simply create a new file in the `app/` directory. Expo Router will automatically create a route for it.

### Icons
Add new icon mappings in `components/ui/icon-symbol.js`:

```javascript
const MAPPING = {
  'house.fill': 'home',
  'your-sf-symbol': 'material-icon-name',
  // ...
};
```

## Backend Setup (Optional)

This template includes a ready-to-use Node.js backend with MySQL:

1. Navigate to the server directory:
```bash
cd server
npm install
```

2. Configure your database in `server/.env`

3. Start the server:
```bash
npm run dev
```

4. **Important:** After configuring `.env` with your credentials, uncomment the `.env` line in `server/.gitignore` to protect your sensitive data

See `server/README.md` for detailed setup instructions.

## Get a Fresh Start

When you're ready to start from scratch, run:

```bash
npm run reset-project
```

This moves the example code to `app-example/` and creates a blank `app/` directory.

## Scripts

**React Native App:**
- `npm start` - Start the development server
- `npm run android` - Start on Android
- `npm run ios` - Start on iOS
- `npm run web` - Start on web
- `npm run reset-project` - Reset to blank project
- `npm run lint` - Run ESLint

**Backend Server (in /server):**
- `npm start` - Start the server
- `npm run dev` - Start with auto-reload

## Learn More

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router documentation](https://docs.expo.dev/router/introduction/)
- [React Native documentation](https://reactnative.dev/)

## License

MIT
