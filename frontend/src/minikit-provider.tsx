import { MiniKit } from '@worldcoin/minikit-js';
import { ReactNode, useEffect } from 'react';

export default function MiniKitProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    MiniKit.install();
  }, []);

  console.log('Is MiniKit installed correctly? matias ', MiniKit.isInstalled());

  return <>{children}</>;
}
