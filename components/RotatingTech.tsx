'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Google brand colors, classic logo sequence
const G = '#4285F4'; // blue
const R = '#EA4335'; // red
const Y = '#FBBC05'; // yellow
const E = '#34A853'; // green

function GoogleWord() {
  // G o o g l e  →  blue red yellow blue green red
  return (
    <span className="whitespace-nowrap">
      <span style={{ color: G }}>G</span>
      <span style={{ color: R }}>o</span>
      <span style={{ color: Y }}>o</span>
      <span style={{ color: G }}>g</span>
      <span style={{ color: E }}>l</span>
      <span style={{ color: R }}>e</span>
      <span className="text-sky-400"> Cloud</span>
    </span>
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
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((v) => (v + 1) % items.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block align-baseline" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={items[i].key}
          initial={{ y: '0.55em', opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-0.55em', opacity: 0, filter: 'blur(4px)' }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          {items[i].node}
        </motion.span>
      </AnimatePresence>
      <span className="cursor" />
    </span>
  );
}
