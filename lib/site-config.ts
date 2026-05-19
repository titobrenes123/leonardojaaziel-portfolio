/**
 * Site-wide configuration constants.
 *
 * Empty string = the integration is disabled and the component no-ops.
 * No env vars needed — this file is the single place to flip things on.
 */

/**
 * Microsoft Clarity project ID — paste the alphanumeric ID shown at
 * https://clarity.microsoft.com/projects (e.g. "pjk8xq2m4n").
 *
 * Once set, every page loads the Clarity tag and the dashboard at
 * https://clarity.microsoft.com/projects/view/<id> starts capturing:
 *   - Session recordings (watch real visitors interact)
 *   - Heatmaps (clicks, scroll depth)
 *   - Built-in bot/spam filtering
 *   - Smart Insights (rage clicks, dead clicks, excessive scrolling)
 *
 * Free forever, no cookie banner needed by default.
 */
export const CLARITY_PROJECT_ID = 'wtesx240gs';

/**
 * Google Analytics 4 Measurement ID — shown in the Firebase Console at
 * Project settings → General → Your apps → (web app) → SDK config.
 * Format: `G-XXXXXXXXXX`.
 *
 * Hardcoded here rather than auto-detected from Firebase Hosting's
 * `/__/firebase/init.json` because that endpoint serves the *first*
 * registered Web App's config, which may not be the one linked to
 * Analytics. Pasting the ID directly is more reliable.
 */
export const GA_MEASUREMENT_ID = 'G-TJFVLD6BN1';
