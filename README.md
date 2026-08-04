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
