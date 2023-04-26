import { createTokenUtils } from "../../utils";

export default [
  {
    marketAddress: "0xF25212E676D1F7F89Cd72fFEe66158f541246445",
    baseAsset: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    marketName: "USDC",
    key: "usdc",
    baseToken: createTokenUtils([
      {
        key: "usdc",
        type: "token",
        symbol: "USDC",
        name: "USD Coin",
        address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        decimals: 6,
        isStableCoin: true,
        logoURI: "https://cdn.instadapp.io/icons/tokens/usdc.svg",
        root: "usdc",
      },
    ]),
    collateralTokens: createTokenUtils([
      {
        key: "matic",
        type: "token",
        symbol: "MATIC",
        name: "Matic",
        address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        decimals: 18,
        isStableCoin: false,
        logoURI: "https://cdn.instadapp.io/icons/tokens/matic.svg",
        isToken: true,
        factor: 0.7,
        liquidation: 0.93,
      },
      {
        key: "wbtc",
        type: "token",
        symbol: "WBTC",
        name: "Wrapped BTC",
        address: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
        decimals: 8,
        isStableCoin: false,
        logoURI: "https://cdn.instadapp.io/icons/tokens/wbtc.svg",
        isToken: true,
        factor: 0.75,
        liquidation: 0.95,
      },
      {
        key: "weth",
        type: "token",
        symbol: "WETH",
        name: "Wrapped Ethereum",
        address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        decimals: 18,
        isStableCoin: false,
        logoURI: "https://cdn.instadapp.io/icons/tokens/weth.svg",
        isToken: true,
        factor: 0.82,
        liquidation: 0.95,
      },
    ]),
  },
];
