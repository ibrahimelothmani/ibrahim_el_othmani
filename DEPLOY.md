# Deploying Your React Portfolio to Firebase

## Security First ✅

Your Firebase configuration has been secured using environment variables. The `.env` file contains your sensitive keys and is **git-ignored** to prevent accidental exposure.

## Deployment Steps

### 1. Prerequisites
Install Firebase CLI globally if not already installed:
```bash
npm install -g firebase-tools
```

### 2. Verify Environment Variables
Ensure your `.env` file exists at the project root with:
```env
VITE_FIREBASE_API_KEY=AIzaSyCkCtaJalbAfPQEN24csLHASeZnEiFIVPQ
VITE_FIREBASE_AUTH_DOMAIN=portfolioibrahim-be5a8.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=portfolioibrahim-be5a8
VITE_FIREBASE_STORAGE_BUCKET=portfolioibrahim-be5a8.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=946231160452
VITE_FIREBASE_APP_ID=1:946231160452:web:01fe57f61973596444dcd1
```

### 3. Build the Project
Generate the production build:
```bash
npm run build
```

This creates an optimized `dist` folder ready for deployment.

### 4. Login to Firebase
Authenticate with your Google account:
```bash
firebase login
```

### 5. Initialize Firebase Hosting
Set up Firebase hosting for your project:
```bash
firebase init hosting
```

**Configuration Options:**
- **Project**: Select `portfolioibrahim-be5a8` (existing project)
- **Public directory**: Enter `dist` (⚠️ Important: Vite builds to `dist`, not `public`)
- **Single-page app**: `y` (Yes)
- **GitHub auto-deploy**: `n` (No, unless you want CI/CD)
- **Overwrite index.html**: `n` (No)

### 6. Deploy to Firebase
Push your site live:
```bash
firebase deploy
```

Your portfolio will be live at: `https://portfolioibrahim-be5a8.web.app`

## Important Notes

✅ **Environment Variables**: Always keep `.env` in `.gitignore`  
✅ **Build Before Deploy**: Run `npm run build` before each deployment  
✅ **Test Locally**: Use `npm run preview` to test the production build locally before deploying  

## Troubleshooting

**Build fails?** Check that all environment variables are set correctly in `.env`  
**Contact form not working?** Ensure Firebase Realtime Database rules allow writes to `/contacts`
