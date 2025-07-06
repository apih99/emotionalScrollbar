# 🚀 Deployment Guide - GitHub Pages

This guide will help you deploy your Emotional Scrollbar app to GitHub Pages using GitHub Actions.

## 📋 Prerequisites

- GitHub repository: `https://github.com/apih99/emotionalScrollbar`
- GitHub account with repository access
- Code pushed to the `main` branch

## 🔧 Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository: `https://github.com/apih99/emotionalScrollbar`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. This will automatically use the workflow we created

### 2. Configure Repository Permissions (Optional)

The workflow now has built-in permissions, but if you encounter issues:

1. In your repository, go to **Settings**
2. Click on **Actions** in the left sidebar
3. Click on **General**
4. Under **Workflow permissions**, select **Read and write permissions**
5. Click **Save**

### 3. Push Your Code

Make sure all the files are committed and pushed to your repository:

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 4. Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 2-3 minutes)
4. Once complete, your app will be available at: `https://apih99.github.io/emotionalScrollbar/`

## 🎯 Automatic Deployment

After the initial setup, your app will automatically deploy whenever you:
- Push changes to the `main` branch
- The GitHub Action will build and deploy your app automatically

## 🔄 Manual Deployment (Optional)

If you need to deploy manually, you can also use:

```bash
npm install
npm run deploy
```

## 📱 Your Live App

Once deployed, your Emotional Scrollbar will be available at:
**https://apih99.github.io/emotionalScrollbar/**

## 🐛 Troubleshooting

### Common Issues:

1. **Build fails**: Check the Actions tab for error messages
2. **404 Error**: Make sure GitHub Pages source is set to "GitHub Actions"
3. **Permissions Error**: The workflow now has built-in permissions, but check repository settings if issues persist
4. **Deployment fails**: Ensure the repository is public or you have GitHub Pro/Team for private repos

### Debug Steps:

1. Check the **Actions** tab for build logs
2. Verify GitHub Pages source is set to "GitHub Actions" in repository settings
3. Make sure the repository is public (or you have GitHub Pro for private repos)
4. Check if the github-pages environment is created in repository settings

## 📞 Support

If you encounter any issues:
1. Check the GitHub Actions logs in the Actions tab
2. Verify all settings in the repository Settings
3. Make sure your code is pushed to the `main` branch

---

**Your Emotional Scrollbar is ready to go viral! 🎉** 