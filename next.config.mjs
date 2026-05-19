/**
 * Next.js config — tuned for Firebase Hosting (static).
 *
 * `output: 'export'` generates a fully static site into `out/` at build time
 * so Firebase Hosting can serve it as plain HTML+JS — no Node runtime needed.
 * That mode disables Next's image optimizer, so we set `unoptimized: true`
 * and whitelist `images.credly.com` for the certification badge URLs that
 * load through `next/image` in `components/Certifications.tsx`.
 *
 * `trailingSlash: true` matches Firebase's `cleanUrls`/`trailingSlash`
 * behavior in `firebase.json`, so navigation is consistent in both prod
 * and `next dev`.
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.credly.com' },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
