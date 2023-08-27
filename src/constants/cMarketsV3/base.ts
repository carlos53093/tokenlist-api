import { createTokenUtils } from "../../utils";

export default [
  {
    marketAddress: "0x9c4ec768c28520B50860ea7a15bd7213a9fF58bf",
    baseAsset: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
    marketName: "USDbC",
    key: "usdbc",
    baseToken: createTokenUtils([
      {
        key: "usdbc",
        type: "token",
        symbol: "USDbC",
        name: "USD base Coin",
        address: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
        decimals: 6,
        isStableCoin: true,
        logoURI: "https://cdn.instadapp.io/icons/tokens/usdc.svg",
        root: "usdbc",
      },
    ]),
    collateralTokens: createTokenUtils([
      {
        key: "cbeth",
        type: "token",
        symbol: "cbETH",
        name: "Coinbase Wrapped Staked ETH",
        address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
        decimals: 18,
        isStableCoin: false,
        logoURI: "https://cdn.instadapp.io/icons/tokens/cbeth.svg",
        isToken: true,
        factor: 0.75,
        liquidation: 0.8,
      },
      {
        key: "eth",
        type: "token",
        symbol: "ETH",
        name: "ETH",
        address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        decimals: 18,
        isStableCoin: false,
        logoURI: "https://cdn.instadapp.io/icons/tokens/eth.svg",
        isToken: true,
        factor: 0.79,
        liquidation: 0.84,
      },
    ]),
  },
];
