# Redux Memoized Selectors Demo

This project demonstrates optimizing state access and reducing unnecessary re-renders using:

- Redux Toolkit
- Reselect `createSelector`
- derived state selectors
- `React.memo`
- `useMemo` and `useCallback`

## What this demo shows

- Basic selectors for state access
- Memoized derived selectors to prevent redundant recomputation
- Efficient component rendering for large or frequently-updated data
- Filtered posts and grouped data derived from state without duplication

## Run locally

1. Install dependencies
   ```bash
   npm install
   ```
2. Start development server
   ```bash
   npm run dev
   ```

## GitHub and Vercel

1. Create a GitHub repository and push the local repo:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```

2. Deploy to Vercel:
   - Install Vercel if needed: `npm install -g vercel`
   - Run `vercel login` and follow the prompts
   - Run `vercel` in the project directory
   - Choose the GitHub repo when prompted or link the project manually

3. Vercel build configuration:
   - `build`: `npm run build`
   - `outputDirectory`: `dist`

> After deployment, Vercel will provide a live URL for the app.
