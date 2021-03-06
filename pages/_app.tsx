import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  defaultChains,
  defaultL2Chains,
  WagmiProvider,
  chain,
  Connector,
  createClient,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

function MyApp({ Component, pageProps }: AppProps) {
  const infuraId = "I6_CU10SsmTGqIRlBfM7zO50wgrLgh8z";

  const chains = [...defaultChains, ...defaultL2Chains];

  const connectors = createClient({
    autoConnect: true,
    connectors: ({ chainId }: { chainId?: number }): Connector[] => {
      const rpcUrl =
        chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
        chain.mainnet.rpcUrls[0];
      return [
        new InjectedConnector({
          chains,
          options: { shimDisconnect: true },
        }),
        new WalletConnectConnector({
          chains,
          options: {
            infuraId,
            qrcode: true,
          },
        }),
        // new WalletLinkConnector({
        //   options: {
        //     appName: "My wagmi app",
        //     jsonRpcUrl: `${rpcUrl}/${infuraId}`,
        //   },
        // }),
      ];
    },
  });

  return (
    <WagmiProvider client={connectors}>
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </WagmiProvider>
  );
}

export default MyApp;
