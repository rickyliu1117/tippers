import { http, createConfig } from 'wagmi';
import { arbitrum, base, mainnet, optimism, sepolia } from 'wagmi/chains';
//import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors';

import { metaMask} from 'wagmi/connectors';
const projectId = '3fbb6bba6f1de962d911bb5b5c9dba88';

export const config = createConfig({
  chains: [sepolia, arbitrum, mainnet],
  connectors: [metaMask()],
  multiInjectedProviderDiscovery: false,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [arbitrum.id]: http(),
  },
});