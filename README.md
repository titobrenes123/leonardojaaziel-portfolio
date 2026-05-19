# leonardojaaziel.com — Portfolio

Personal portfolio site for Leonardo Jaaziel — Cloud Engineer & Google Workspace Specialist.

## Stack
- Next.js 14 (App Router) — static export
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react icons

## Local development

```powershell
npm install
npm run dev
```

Open http://localhost:3000.

## Production build (static export for Firebase Hosting)

```powershell
npm run build
```

This produces an `out/` folder ready to deploy.

## Deploy to Firebase Hosting

```powershell
npm install -g firebase-tools
firebase login
firebase use --add        # pick or create the Firebase project
npm run build
firebase deploy --only hosting
```

`firebase.json` already points `hosting.public` at the `out/` directory and sets long-lived caching for static assets.

## Custom domain (leonardojaaziel.com)

In Firebase Console → Hosting → Add custom domain → follow the DNS verification steps.
