# Deploying to GitHub Pages

GitHub Pages expects an `index.html` file at the root of your repository or in a `/docs` folder. Since this is a Vite/React project, you cannot simply point it to your repository's root folder because your website is actually inside the `client/` directory and needs to be "built" first.

### Option 1: The Easiest Way (GitHub Actions)
1. In your GitHub repository, go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, change it to **GitHub Actions**.
3. GitHub will suggest a "Static HTML" or "Node.js" workflow. Click **Configure** on the **Node.js** one.
4. It will create a `.github/workflows/node.js.yml` file. This will automatically build your project and deploy it every time you push code.

### Option 2: Manual "Dist" folder (What you likely tried)
If you want to deploy from a branch:
1. Run `npm run build` in your Replit shell.
2. This creates a `dist/` folder.
3. You need to move the contents of `dist/` to the root of a branch (like `gh-pages`) and tell GitHub to deploy from that branch.

### Note on Vite Base Path
If your repository name is NOT `yourusername.github.io` (e.g., it is `my-sound-site`), you must update `vite.config.ts` to include the base path:

```typescript
// vite.config.ts
export default defineConfig({
  base: '/your-repo-name/', // Add this line
  // ... other config
})
```

I have created this README for you to refer back to.