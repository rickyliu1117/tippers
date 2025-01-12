import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';

import { ConnectWallet } from './ConnectWallet';
import { config } from './config';
//import "./index.css"

const queryClient = new QueryClient();

export default function WagmiApp() {

  return (
    <WagmiProvider config={config} reconnectOnMount={false} >
      <QueryClientProvider client={queryClient}>
        <ConnectWallet />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

