import React from 'react';
import { useAccount } from 'wagmi';

import { Account } from './Account';
import { Connect } from './Connect';
import { WalletOptions } from './WalletOptions';

export function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />
  return <WalletOptions />
}
