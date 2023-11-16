import { createTokenUtils } from "../../utils";

export default [
  {
    marketAddress: "0xF25212E676D1F7F89Cd72fFEe66158f541246445",
    baseAsset: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    marketName: "USDC.e",
    key: "usdce",
    baseToken: createTokenUtils([
      {
        key: "usdce",
        type: "token",
        symbol: "USDC.e",
        name: "USD Coin",
        address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        decimals: 6,
        isStableCoin: true,
        logoURI: "https://cdn.instadapp.io/icons/tokens/usdc.svg",
        root: "usdce",
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
        factor: 0.65,
        liquidation: 0.7,
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
        factor: 0.7,
        liquidation: 0.75,
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
        factor: 0.78,
        liquidation: 0.82,
      },
      {
        key: "stmatic",
        type: "token",
        symbol: "STMATIC",
        name: "Staked MATIC (PoS)",
        address: "0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4",
        decimals: 18,
        isStableCoin: false,
        logoURI: "https://cdn.instadapp.io/icons/tokens/stmatic.svg",
        isToken: true,
        factor: 0.78,
        liquidation: 0.82,
      },
      {
        key: "maticx",
        type: "token",
        symbol: "MATICX",
        name: "Liquid Staking Matic (PoS)",
        address: "0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6",
        decimals: 18,
        isStableCoin: false,
        logoURI: "https://cdn.instadapp.io/icons/tokens/maticx.svg",
        isToken: true,
        factor: 0.78,
        liquidation: 0.82,
      },
    ]),
  },
];
