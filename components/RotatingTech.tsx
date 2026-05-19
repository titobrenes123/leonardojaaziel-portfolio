'use client';

/**
 * Rotating tech word in the hero headline.
 *
 * Cycles through Google Cloud surfaces every 2.4s. When "Google Cloud"
 * is active, the word "Google" renders with the official Google logo
 * letter colors (G-o-o-g-l-e = blue-red-yellow-blue-green-red).
 *
 * Layout-shift fix:
 *   All variants are rendered in the same CSS grid cell (col-start-1 /
 *   row-start-1). The container's width is implicitly `max(widths)`,
 *   so the surrounding heading never reflows when a long word ("Cloud
 *   Functions") rotates in after a short one ("GKE"). Only the active
 *   variant is opaque; others are invisible but still occupy the grid
 *   cell for sizing.
 *
 * The blinking cursor lives inside each variant so it sits right after
 * the active word, not at the right edge of the longest variant.
 */

import { useEffect, useState } from 'react';

// Official Google logo colors (G-o-o-g-l-e order)
const G = '#4285F4'; // blue
const R = '#EA4335'; // red
const Y = '#FBBC05'; // yellow
const E = '#34A853'; // green

function GoogleWord() {
  return (
    <>
      <span style={{ color: G }}>G</span>
      <span style={{ color: R }}>o</span>
      <span style={{ color: Y }}>o</span>
      <span style={{ color: G }}>g</span>
      <span style={{ color: E }}>l</span>
      <span style={{ color: R }}>e</span>
      <span className="text-sky-400"> Cloud</span>
    </>
  );
}

type Item = { key: string; node: React.ReactNode };

const items: Item[] = [
  { key: 'gcp', node: <GoogleWord /> },
  { key: 'gke', node: <span className="text-sky-400">GKE</span> },
  { key: 'run', node: <span className="text-sky-400">Cloud Run</span> },
  { key: 'bq', node: <span className="text-sky-400">BigQuery</span> },
  { key: 'vai', node: <span className="text-sky-400">Vertex AI</span> },
  { key: 'fns', node: <span className="text-sky-400">Cloud Functions</span> },
  { key: 'ws', node: <span className="text-sky-400">Workspace</span> },
];

export default function RotatingTech() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % items.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="relative inline-grid align-baseline whitespace-nowrap"
      aria-live="polite"
    >
      {items.map((item, i) => (
        <span
          key={item.key}
          className="col-start-1 row-start-1 whitespace-nowrap transition-[opacity,transform,filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          aria-hidden={i !== active}
          style={{
            opacity: i === active ? 1 : 0,
            transform: i === active ? 'translateY(0)' : 'translateY(0.4em)',
            filter: i === active ? 'blur(0)' : 'blur(6px)',
            pointerEvents: i === active ? 'auto' : 'none',
          }}
        >
          {item.node}
          <span className="cursor" />
        </span>
      ))}
    </span>
  );
}
