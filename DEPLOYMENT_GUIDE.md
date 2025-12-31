# How to Host Your Black Hole Portfolio on GitHub

Follow these steps to put your website online for free!

## Step 1: Create a Repository on GitHub
**You have already done this step!**
Your repository URL is: `https://github.com/RAYXSTUDIOZGAMES/black-hole-portfolio.git`

## Step 2: Configure Git (One Time Setup)
If you haven't used Git on this computer before, you need to tell it who you are. Run these two commands in your terminal (replace with your info):

```powershell
git config --global user.email "youremail@example.com"
git config --global user.name "Your Name"
```

## Step 3: Connect and Push Your Code
Copy and paste these commands into your terminal one by one:

```powershell
# 1. Initialize the git folder (if not already done)
git init

# 2. Add all your files
git add .

# 3. Save your changes (Commit)
git commit -m "First commit: Insane Black Hole Portfolio"

# 4. Link to GitHub (Your actual repo URL)
git remote add origin https://github.com/RAYXSTUDIOZGAMES/black-hole-portfolio.git

# 5. Send the code to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Publish Your Site
Now that the code is on GitHub, run this command to build and publish the website:

```powershell
npm run deploy
```

## Step 5: Verification
1. `vite.config.js` is already set to `base: '/black-hole-portfolio/'`.
2. `package.json` needs to be updated with your username if not already done.

## Step 6: View Your Site!
After running `npm run deploy`, wait about 2 minutes. Your site will be live at:
https://RAYXSTUDIOZGAMES.github.io/black-hole-portfolio/
