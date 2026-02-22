# Bhartiya Jalpan Website (React + TypeScript)

Modern multi-page sweets shop website with pages:
- Home
- About Us
- Our Sweets
- Order Online (Zomato + Swiggy)
- Contact Us

## Run locally
```bash
npm install
npm run dev
```

## Deploy on GitHub Pages
This repository is configured with a GitHub Actions workflow to deploy automatically.

### Steps
1. Push this code to your GitHub repo.
2. In GitHub: **Settings → Pages**.
3. Under **Build and deployment**, set **Source = GitHub Actions**.
4. Push to `main` (or `master` / `work`) branch.
5. Workflow `Deploy to GitHub Pages` will build and publish `dist`.

Your live URL will be:
`https://<your-username>.github.io/<your-repository-name>/`

## Content customization
Update `src/data.ts` with real business details:
- `mapEmbedUrl`
- `galleryImages[]`
- `zomatoUrl`
- `swiggyUrl`
- address/phone/email


### Workflow note
- GitHub Actions workflow uses `npm install` (not `npm ci`) so deployment works even without a committed lockfile.
