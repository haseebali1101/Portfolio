# Push to GitHub - Instructions

## Step 1: Create a GitHub Repository

1. Go to https://github.com
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it (e.g., "portfolio" or "haseeb-ali-portfolio")
5. **Do NOT initialize with README, .gitignore, or license** (we already have these)
6. Click "Create repository"

## Step 2: Add Remote and Push

**Your Repository Details:**
- Username: `haseebali1101`
- Repository: `Portfolio`
- URL: `https://github.com/haseebali1101/Portfolio.git`

**The remote is already configured!** After creating the repository on GitHub, simply run:

```bash
git push -u origin main
```

Or if you need to add the remote again:
```bash
git remote add origin https://github.com/haseebali1101/Portfolio.git
git push -u origin main
```

## Alternative: Using SSH

If you have SSH keys set up with GitHub:

```bash
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## Quick Command (Copy and Replace)

```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## After Pushing

Your portfolio code will be on GitHub! You can:
- Share the repository link
- Set up GitHub Pages for hosting (alternative to Google Cloud)
- Enable GitHub Actions for CI/CD
- Collaborate with others

## Future Updates

After making changes to your portfolio:

```bash
git add .
git commit -m "Update portfolio information"
git push
```

