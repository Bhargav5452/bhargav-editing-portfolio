'use client';

import { useEffect, useState } from 'react';
import LoaderScreen from '@/components/LoaderScreen';

export default function LoaderGate({ children }: { children: React.ReactNode }) {
  // null = not yet determined (avoid flash on return visits)
  const [showLoader, setShowLoader] = useState<boolean | null>(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('bnk_visited');
    if (hasVisited) {
      setShowLoader(false);
    } else {
      setShowLoader(true);
      sessionStorage.setItem('bnk_visited', '1');
    }
  }, []);

  // Don't render anything until we know (prevents flash)
  if (showLoader === null) return null;

  return (
    <>
      {showLoader && <LoaderScreen onComplete={() => setShowLoader(false)} />}
      {children}
    </>
  );
}

