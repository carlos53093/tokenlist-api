import { createTokenUtils } from "../../utils";

export default [
  {
    marketAddress: "0xc3d688B66703497DAA19211EEdff47f25384cdc3",
    baseAsset: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    marketName: "USDC",
    key: "usdc",
    baseToken: createTokenUtils([
      {
        key: "usdc",
        type: "token",
        symbol: "USDC",
        name: "USD Coin",
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
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
        factor: 0.825,
        liquidation: 0.895,
      },
      {
        key: "wbtc",
        type: "token",
        symbol: "WBTC",
        name: "Wrapped BTC",
        address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        decimals: 8,
        isStableCoin: false,
        logoURI: "https://cdn.instadapp.io/icons/tokens/wbtc.svg",
        isToken: true,
        factor: 0.7,
        liquidation: 0.77,
      },
      {
        key: "uni",
        type: "token",
        symbol: "UNI",
        name: "Uniswap Token",
        address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        decimals: 18,
        isStableCoin: false,
        logoURI: "https://cdn.instadapp.io/icons/tokens/uni.svg",
        isToken: true,
        factor: 0.75,
        liquidation: 0.81,
      },
      {
        key: "link",
        type: "token",
        symbol: "LINK",
        name: "ChainLink Token",
        address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
        decimals: 18,
        isStableCoin: false,
        logoURI: "https://cdn.instadapp.io/icons/tokens/link.svg",
        isToken: true,
        factor: 0.79,
        liquidation: 0.85,
      },
      {
        key: "comp",
        type: "token",
        symbol: "COMP",
        name: "Compound",
        address: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
        decimals: 18,
        isStableCoin: false,
        logoURI: "https://cdn.instadapp.io/icons/tokens/comp.svg",
        isToken: true,
        factor: 0.65,
        liquidation: 0.7,
      },
    ]),
  },
];
