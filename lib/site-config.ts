/**
 * Site-wide configuration constants.
 *
 * Things that depend on external accounts get a single home here so the
 * rest of the codebase doesn't need to know where to look. Empty string
 * = the integration is disabled and components no-op silently.
 */

/**
 * Microsoft Clarity project ID — paste the alphanumeric ID shown at
 * https://clarity.microsoft.com/projects (e.g. "abc123def4").
 *
 * Once set, the Clarity tag loads on every page and provides:
 *   - Session recordings (watch real visitors interact)
 *   - Heatmaps (clicks, scroll depth)
 *   - Built-in bot filtering
 *   - Behavior insights (rage clicks, dead clicks, excessive scrolling)
 *
 * Free forever, no cookie banner needed by default.
 */
export const CLARITY_PROJECT_ID = '';

/**
 * Google Analytics 4 — the Measurement ID is auto-detected from
 * Firebase Hosting's `/__/firebase/init.json` once you enable Analytics
 * in the Firebase Console. No setting needed here.
 *
 * See `components/Analytics.tsx`.
 */
