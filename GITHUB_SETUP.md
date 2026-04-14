# GitHub Repository Setup

Quick guide to get your Bartels Law Firm website on GitHub and deployed.

## 🚀 Push to GitHub

### 1. Create a New Repository on GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click the '+' icon in the top right > "New repository"
3. Repository name: `bartels-law-firm` (or your preference)
4. Description: "Modern website for The Bartels Law Firm, PLLC"
5. Choose Public or Private
6. **Do NOT** initialize with README (we already have one)
7. Click "Create repository"

### 2. Connect Your Local Repository

```bash
# Navigate to your project
cd /Users/kevintcarlberg/bartels_website

# Rename branch to main (if needed)
git branch -M main

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/bartels-law-firm.git

# Push your code
git push -u origin main
```

### 3. Alternative: Using SSH

If you prefer SSH:

```bash
# Add SSH remote (replace YOUR_USERNAME)
git remote add origin git@github.com:YOUR_USERNAME/bartels-law-firm.git

# Push
git push -u origin main
```

## 🌐 Deploy with GitHub Pages

### Option A: Using GitHub Web Interface

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"
6. Wait a few seconds, then refresh the page
7. Your site will be live at: `https://YOUR_USERNAME.github.io/bartels-law-firm`

### Option B: Using GitHub CLI

```bash
# Install GitHub CLI (if not installed)
brew install gh  # macOS
# or download from https://cli.github.com

# Authenticate
gh auth login

# Create repository and push
gh repo create bartels-law-firm --public --source=. --remote=origin --push

# Enable GitHub Pages
gh repo edit --enable-pages --pages-branch main
```

## 📝 Repository Description

Add a comprehensive description to your GitHub repository:

**About Section:**
- Description: `Professional website for The Bartels Law Firm, PLLC - Civil litigation attorneys in Kirkland, WA`
- Website: `https://www.bartelslegal.com` (or your GitHub Pages URL)
- Topics: `law-firm`, `website`, `legal`, `responsive-design`, `html-css-javascript`

**README Badge (Optional):**

Add this to the top of README.md for a deployment status badge:

```markdown
![Deployment Status](https://img.shields.io/badge/deployment-live-success)
![GitHub Pages](https://img.shields.io/github/deployments/YOUR_USERNAME/bartels-law-firm/github-pages)
```

## 🔧 Repository Settings

### Recommended Settings

1. **Branch Protection** (for production):
   - Settings > Branches
   - Add protection rule for `main` branch
   - Enable "Require pull request reviews before merging"

2. **Issues**:
   - Enable for bug tracking and feature requests
   - Add issue templates for better organization

3. **Discussions**:
   - Can be used for Q&A about the website

## 📦 Create Releases

When you make significant updates:

```bash
# Create a tag for the release
git tag -a v1.0.0 -m "Initial release - Modern Bartels Law Firm website"

# Push the tag
git push origin v1.0.0
```

Then on GitHub:
1. Go to "Releases"
2. Click "Create a new release"
3. Select your tag
4. Add release notes
5. Publish

## 🔄 Future Updates

### Making Changes

```bash
# Make your changes to files
# Then commit and push

git add .
git commit -m "Update contact information"
git push origin main
```

GitHub Pages will automatically redeploy!

### Best Practices

1. **Commit Often**: Make small, focused commits
2. **Write Clear Messages**: Describe what changed and why
3. **Use Branches**: For major changes, create a feature branch
   ```bash
   git checkout -b feature/new-testimonials
   # Make changes
   git commit -m "Add testimonials section"
   git push origin feature/new-testimonials
   # Then create a Pull Request on GitHub
   ```

## 🤝 Collaboration

### Adding Team Members

1. Settings > Collaborators and teams
2. Click "Add people"
3. Enter GitHub username or email
4. Choose permission level (Write access for editors)

### Pull Request Workflow

```bash
# Team member creates a branch
git checkout -b updates/new-content

# Makes changes and commits
git add .
git commit -m "Add new practice area"

# Pushes branch
git push origin updates/new-content
```

Then create Pull Request on GitHub for review.

## 📊 GitHub Actions (Optional)

Automate tasks with GitHub Actions. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Website

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## 🔐 Security

### Dependabot (Optional)

Enable in Settings > Security > Dependabot to get alerts for vulnerabilities.

### Secrets Management

Never commit:
- API keys
- Database credentials
- Email passwords

Use GitHub Secrets for sensitive data needed in Actions.

## 📈 Analytics

Track repository stats:
- **Traffic**: See visitor count under Insights > Traffic
- **Clones**: See how many times repo was cloned
- **Popular Content**: See which files are viewed most

## 🆘 Troubleshooting

### Push Rejected

```bash
# Pull latest changes first
git pull origin main --rebase
git push origin main
```

### GitHub Pages Not Updating

1. Check Settings > Pages for errors
2. Wait 5-10 minutes (can take time to build)
3. Try a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
4. Check repository Actions tab for build status

### Wrong GitHub Pages URL

Your site URL should be:
- `https://YOUR_USERNAME.github.io/bartels-law-firm/`
- If repository name is your username: `https://YOUR_USERNAME.github.io/`

## 📚 Resources

- [GitHub Docs](https://docs.github.com)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Markdown Guide](https://www.markdownguide.org/)

---

**Next Step:** Once pushed to GitHub, share the repository link with team members!
