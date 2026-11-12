'use client';

import { useState } from 'react';
import LoaderScreen from '@/components/LoaderScreen';
import { LoaderProvider, useLoader } from '@/components/LoaderContext';

export default function LoaderGate({ children }: { children: React.ReactNode }) {
  return (
    <LoaderProvider>
      <LoaderGateInner>{children}</LoaderGateInner>
    </LoaderProvider>
  );
}

function LoaderGateInner({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);
  const { setIsLoaded } = useLoader();

  return (
    <>
      {showLoader && (
        <LoaderScreen
          onStartCollapse={() => {
            setIsLoaded(true);
          }}
          onComplete={() => {
            setShowLoader(false);
          }}
        />
      )}
      {children}
    </>
  );
}

