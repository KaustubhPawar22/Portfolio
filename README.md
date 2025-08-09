# Portavia-inspired Next.js (v14) — Enhanced Hero (v3)

This project is an improved implementation of a Portavia-style hero with a pinned, scroll-driven 3D transform.

## Quick start

1. Install dependencies
```bash
npm install
```

2. Run development server
```bash
npm run dev
```

Open http://localhost:3000 and scroll — the hero should stay pinned while the image rotates, scales, and translates horizontally, with a layered 'Hi' bubble above it.

## Deploying to Vercel (recommended)

1. Push this repo to GitHub.
2. Go to https://vercel.com/import/git and import the repository.
3. Vercel will detect Next.js. Click Deploy.
4. Optionally set a custom domain in Vercel after deploy.

Or use Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel
```

## Notes & Next steps

- Replace `/public/hero.jpg` with your real hero image.
- Update `pages/index.tsx` content to include real project links and detailed descriptions.
- If you were running into the `next.config.ts` error in CodeSandbox, this version includes `next.config.js` so that error will not appear.
"# Portfolio" 
