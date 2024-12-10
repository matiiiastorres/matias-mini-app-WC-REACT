// import { MiniKit } from '@worldcoin/minikit-js';
// import { ReactNode, useEffect } from 'react';

// export default function MiniKitProvider({ children }: { children: ReactNode }) {
//   useEffect(() => {
//     MiniKit.install();
//   }, []);

//   console.log('Is MiniKit installed correctly? matias ', MiniKit.isInstalled());

//   return <>{children}</>;
// }

import { MiniKit } from '@worldcoin/minikit-js';
import { ReactNode, useEffect } from 'react';

export default function MiniKitProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const APP_ID = 'app_6f9d7b35c03591b6965c6e47497a8bcd'; // Reemplaza con tu appId real
    MiniKit.install(APP_ID);
    // .then(() => console.log('MiniKit instalado correctamente'))
    // .catch((error) => console.error('Error al instalar MiniKit:', error));
  }, []);

  return <>{children}</>;
}
