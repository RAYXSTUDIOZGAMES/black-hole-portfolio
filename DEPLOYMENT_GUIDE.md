# How to Host Your Black Hole Portfolio on GitHub

Follow these steps to put your website online for free!

## Step 1: Create a Repository on GitHub
1. Go to [github.com](https://github.com/) and sign in (or create an account).
2. Click the **+** icon in the top right and select **New repository**.
3. Name the repository: `black-hole-portfolio`
4. **Important**: Leave "Public" selected.
5. **Important**: Do NOT check "Add a README file", "Add .gitignore", or "Choose a license". The repository must be empty.
6. Click **Create repository**.

## Step 2: Configure Git (One Time Setup)
If you haven't used Git on this computer before, you need to tell it who you are. Run these two commands in your terminal (replace with your info):

```powershell
git config --global user.email "youremail@example.com"
git config --global user.name "Your Name"
```

## Step 3: Connect and Push Your Code
Copy and paste these commands into your terminal one by one:

```powershell
# 1. Initialize the git folder
git init

# 2. Add all your files
git add .

# 3. Save your changes (Commit)
git commit -m "First commit: Insane Black Hole Portfolio"

# 4. Link to GitHub (REPLACE <YOUR-USERNAME> with your actual GitHub username!)
git remote add origin https://github.com/<YOUR-USERNAME>/black-hole-portfolio.git

# 5. Send the code to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Publish Your Site
Now that the code is on GitHub, run this command to build and publish the website:

```powershell
npm run deploy
```

## Step 5: Update Your Settings
1. Open `vite.config.js` in your code editor.
   - Ensure `base: '/black-hole-portfolio/'` matches your repository name.
2. Open `package.json`.
   - Update `"homepage": "https://<YOUR-USERNAME>.github.io/black-hole-portfolio"` with your real username.

## Step 6: View Your Site!
After running `npm run deploy`, wait about 2 minutes. Your site will be live at:
`https://<YOUR-USERNAME>.github.io/black-hole-portfolio/`
