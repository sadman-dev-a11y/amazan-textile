# Amazan Textile

Bangla-first React + TypeScript + Vite catalog, supplied original logo, six routes, original editorial styling, temporary labeled stock clothing photography, genuine call/SMS-draft/clipboard inquiry flows. Actual inventory is empty until the client supplies photos and verified details.

## Run

```sh
npm ci
npm run dev
npm run typecheck
npm run lint
npm test
npm run build
```

Node 22+ recommended. Output: `dist/`. `HashRouter` supports GitHub project-page refreshes. Production base: `/amazan-textile/`; development base: `/`.

## GitHub Pages

Create the public `sadman-dev-a11y/amazan-textile` repository, use `main`, then from this directory:

```sh
git init -b main
git add .
git commit -m "Build Amazan Textile Bangla catalog"
git remote add origin https://github.com/sadman-dev-a11y/amazan-textile.git
git push -u origin main
```

If the remote already contains a README or other work, clone it first and copy these files into the clone, preserving existing history. Do not force-push.

Select repository Settings → Pages → Source → GitHub Actions. The included workflow checks, builds and deploys on `main`. Expected URL after a successful deploy: https://sadman-dev-a11y.github.io/amazan-textile/ . This URL is not a claim of deployment.

## Custom domain later

When the actual domain is supplied, update `src/data/site.ts` URL, canonical and Open Graph metadata in `index.html`, `public/robots.txt`, and `public/sitemap.xml`. Change production Vite base to `/`. Configure the domain in GitHub Pages, add its `CNAME` to `public/`, and follow GitHub's shown DNS instructions. Enable HTTPS after DNS verification. No domain has been configured.

## Limitations

Hash routes are practical for static hosting but not independently indexed collection documents; sitemap includes only the root. Bengali font loads from Google Fonts with local/system fallbacks. No analytics, backend, accounts, payments or lead storage. Clipboard requires a secure browser context; failures provide selectable text. SMS handlers vary by operating system. See CONTENT_GUIDE.md for catalog updates and image credits.
