# CQ Landing Page UI

Next.js + TypeScript marketing site for CapQuant. The app now lives at the repository root so Vercel can build without a subdirectory and no external backend is required.

## Local development
- Node 18+ and npm installed
- `npm install`
- `npm run dev` (http://localhost:3000)
- `npm run lint` to check linting
- `npm run build && npm run start` for a production preview

## API behavior
- `/api/contact` validates the form input and returns a mocked payload; no database or environment variables are needed. Safe for static/Vercel deployments.

## Deploying to Vercel
- Import this repository in Vercel; framework detection will pick Next.js with root set to `.`
- Build command: `npm run build`
- Output directory: `.next`
- No environment variables required

## Optional Docker
- `Dockerfile` and `docker-compose.yaml` remain if you prefer containerized development (`docker-compose up`), but they are not required for local runs or Vercel deploys.
