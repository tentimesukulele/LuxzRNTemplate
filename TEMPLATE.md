# Template Setup & Publishing Guide

This document explains how to use and publish your LuxzRNTemplate.

## Using the Template Locally

### Option 1: Direct Clone
The simplest way to use this template:

```bash
# Clone the repository
git clone <your-repo-url> MyNewApp
cd MyNewApp

# Remove git history to start fresh
rm -rf .git
git init

# Install dependencies
npm install

# Start developing
npx expo start
```

### Option 2: Use with create-expo-app (Local Path)
```bash
npx create-expo-app MyNewApp --template file:///absolute/path/to/LuxzRNTemplate
cd MyNewApp
npm install
npx expo start
```

## Publishing to npm

To make your template available for anyone to use:

### 1. Prepare for Publishing

Update `package.json` with your details:
```json
{
  "name": "@your-username/luxzrntemplate",
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/LuxzRNTemplate.git"
  }
}
```

### 2. Create npm Account
If you don't have one:
```bash
npm adduser
```

### 3. Publish
```bash
# Login to npm
npm login

# Publish the template
npm publish --access public
```

### 4. Use Your Published Template
Once published, anyone can use it:
```bash
npx create-expo-app MyNewApp --template @your-username/luxzrntemplate
```

## Publishing to GitHub

### 1. Create a GitHub Repository
```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial template commit"

# Add remote
git remote add origin https://github.com/your-username/LuxzRNTemplate.git

# Push to GitHub
git push -u origin main
```

### 2. Use from GitHub
```bash
npx create-expo-app MyNewApp --template https://github.com/your-username/LuxzRNTemplate
```

## Template Structure

The template includes:
- `template.json` - Template configuration
- `package.json` - Dependencies and metadata
- `README.md` - User-facing documentation
- `TEMPLATE.md` - This file (publishing instructions)

## What Gets Copied

When someone uses your template, they get:
- All app code (`app/`, `components/`, `hooks/`, `constants/`)
- Configuration files (`app.json`, `eslint.config.js`)
- Assets (`assets/`)
- Scripts (`scripts/`)
- Documentation (`README.md`)

What doesn't get copied:
- `node_modules/` (excluded by `.gitignore`)
- `.git/` directory
- `TEMPLATE.md` (publishing instructions, not needed by users)

## Maintaining Your Template

### Updating Dependencies
```bash
# Check for updates
npm outdated

# Update packages
npm update

# Test the template
npm install
npx expo start
```

### Versioning
Follow semantic versioning:
- **Major** (1.0.0): Breaking changes
- **Minor** (0.1.0): New features, backwards compatible
- **Patch** (0.0.1): Bug fixes

```bash
# Update version in package.json
npm version patch|minor|major

# Publish new version
npm publish
```

## Template Best Practices

1. **Keep it simple** - Only include essentials
2. **Document everything** - Good README is crucial
3. **Test regularly** - Ensure it works on fresh installs
4. **Update dependencies** - Keep packages up to date
5. **Version carefully** - Use semantic versioning
6. **Add examples** - Show how to use included components

## Troubleshooting

### Template not found
- Ensure you're using the correct npm package name
- Check if package is published: `npm view @your-username/luxzrntemplate`

### Dependencies not installing
- Verify all dependencies exist in npm registry
- Check for correct version ranges in `package.json`

### Expo Router issues
- Ensure `expo-router` version is compatible
- Check that `main` field in `package.json` points to `expo-router/entry`

## Resources

- [npm Publishing Guide](https://docs.npmjs.com/cli/v9/commands/npm-publish)
- [Expo Documentation](https://docs.expo.dev/)
- [Semantic Versioning](https://semver.org/)
