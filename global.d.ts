declare module globalThis {
  interface Window {
    ethereum: any | undefined;
  }
}
