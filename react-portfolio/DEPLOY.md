# Deploying to Firebase Hosting

Follow these steps to deploy your React portfolio to Firebase.

## 1. Prerequisites
I have already installed the Firebase CLI for you. If you need to install it manually:
```bash
npm install -g firebase-tools
```

## 2. Build the Project
Generate the production build of your application:
```bash
npm run build
```
*This creates a `dist` folder with your optimized website.*

## 3. Login to Firebase
Authenticate with your Google account:
```bash
firebase login
```

## 4. Initialize Firebase
Set up the project for hosting:
```bash
firebase init hosting
```
**Select the following options when prompted:**
- **Project**: Select "Use an existing project" -> `portfolioibrahim-be5a8`
- **Public directory**: Type `dist` (Important! Vite builds to `dist`, not `public`)
- **Configure as a single-page app**: Type `y` (Yes)
- **Set up automatic builds and deploys with GitHub**: `n` (No, unless you want to set this up later)
- **Overwrite index.html**: `n` (No, do not overwrite)

## 5. Deploy
Push your files to Firebase:
```bash
firebase deploy
```

Your site will be live at the URL provided in the terminal (usually `https://portfolioibrahim-be5a8.web.app`).
