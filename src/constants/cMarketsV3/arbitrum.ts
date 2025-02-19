import { createTokenUtils } from "../../utils";

export default [
  {
    marketAddress: "0xA5EDBDD9646f8dFF606d7448e414884C7d905dCA",
    baseAsset: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    marketName: "USDC",
    key: "usdc",
    baseToken: createTokenUtils([
      {
        key: "usdc",
        type: "token",
        symbol: "USDC",
        name: "USD Coin",
        address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
        decimals: 6,
        isStableCoin: true,
        logoURI: "https://cdn.instadapp.io/icons/tokens/usdc.svg",
        root: "usdc",
      },
    ]),
    collateralTokens: createTokenUtils([
      {
        key: "eth",
        type: "token",
        symbol: "ETH",
        name: "Ethereum",
        address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        decimals: 18,
        isStableCoin: false,
        logoURI: "https://cdn.instadapp.io/icons/tokens/eth.svg",
        isToken: true,
        factor: 0.78,
        liquidation: 0.85,
      },
      {
        key: "wbtc",
        type: "token",
        symbol: "WBTC",
        name: "Wrapped BTC",
        address: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
        decimals: 8,
        isStableCoin: false,
        logoURI: "https://cdn.instadapp.io/icons/tokens/wbtc.svg",
        isToken: true,
        factor: 0.7,
        liquidation: 0.77,
      },
      {
        key: "arb",
        type: "token",
        symbol: "ARB",
        name: "Arbitrum",
        address: "0x912CE59144191C1204E64559FE8253a0e49E6548",
        decimals: 18,
        isStableCoin: false,
        logoURI: "https://cdn.instadapp.io/icons/tokens/uni.svg",
        isToken: true,
        factor: 0.55,
        liquidation: 0.6,
      },
      {
        key: "gmx",
        type: "token",
        symbol: "GMX",
        name: "GMX",
        address: "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
        decimals: 18,
        isStableCoin: false,
        logoURI: "https://cdn.instadapp.io/icons/tokens/gmx.svg",
        isToken: true,
        factor: 0.4,
        liquidation: 0.45,
      },
    ]),
  },
];
