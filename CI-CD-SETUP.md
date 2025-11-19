# CI/CD Setup Guide

This repository uses GitHub Actions to automatically build and deploy your portfolio to Firebase Hosting.

## 🚀 How It Works

The CI/CD pipeline automatically:
- Builds your project when you push to the `main` branch
- Runs on pull requests to verify builds
- Deploys to Firebase Hosting (only on main branch pushes)

## 📋 Setup Instructions

### 1. Get Firebase Service Account

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `portfolioibrahim-be5a8`
3. Click the gear icon ⚙️ → **Project settings**
4. Go to **Service accounts** tab
5. Click **Generate new private key**
6. Download the JSON file (keep it secure!)

### 2. Add GitHub Secrets

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions**

Add these secrets:

#### Firebase Service Account
- **Name**: `FIREBASE_SERVICE_ACCOUNT`
- **Value**: Paste the entire content of the JSON file you downloaded

#### Environment Variables (from your .env file)
- `VITE_FIREBASE_API_KEY`: `AIzaSyCkCtaJalbAfPQEN24csLHASeZnEiFIVPQ`
- `VITE_FIREBASE_AUTH_DOMAIN`: `portfolioibrahim-be5a8.firebaseapp.com`
- `VITE_FIREBASE_PROJECT_ID`: `portfolioibrahim-be5a8`
- `VITE_FIREBASE_STORAGE_BUCKET`: `portfolioibrahim-be5a8.firebasestorage.app`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`: `946231160452`
- `VITE_FIREBASE_APP_ID`: `1:946231160452:web:01fe57f61973596444dcd1`

### 3. Enable GitHub Actions

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
3. Click **Save**

### 4. Push to GitHub

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit with CI/CD pipeline"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 5. Verify Deployment

1. Go to **Actions** tab in your GitHub repository
2. You should see the workflow running
3. Once completed, your site will be live at: `https://portfolioibrahim-be5a8.web.app`

## 🔄 Workflow Details

**File**: `.github/workflows/deploy.yml`

**Triggers**:
- Push to `main` branch → Build & Deploy
- Pull requests to `main` → Build only (no deploy)

**Steps**:
1. Checkout code
2. Setup Node.js 20
3. Install dependencies
4. Create .env file with secrets
5. Build the project
6. Deploy to Firebase (main branch only)

## 📝 Manual Deployment

If you want to deploy manually:

```bash
npm run build
firebase deploy
```

## 🔐 Security Notes

- ✅ Environment variables are stored as GitHub Secrets
- ✅ `.env` file is in `.gitignore`
- ✅ Firebase service account key is never committed
- ✅ Only `main` branch deploys to production

## 🐛 Troubleshooting

### Build fails?
- Check that all secrets are correctly set in GitHub
- Verify the secret names match exactly

### Deploy fails?
- Ensure Firebase service account has proper permissions
- Check that the project ID in `.firebaserc` is correct

### Environment variables not working?
- Make sure all `VITE_` prefixed secrets are added to GitHub
- Verify the secret values don't have extra spaces or quotes

## 🎉 That's it!

Every time you push to `main`, your portfolio will automatically build and deploy!
