import { createTokenUtils } from "../../utils";

export default [
  {
    key: "aave",
    marketName: "Morpho-v3-Aave",
    market: "aave",
    tokens: createTokenUtils([
      {
        key: "weth",
        type: "token",
        address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        decimals: 18,
        name: "Wrapped Ether",
        symbol: "WETH",
      },
      {
        key: "wsteth",
        type: "token",
        address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
        decimals: 18,
        name: "Wrapped liquid staked Ether 2.0",
        symbol: "wstETH",
      },
      {
        key: "dai",
        type: "token",
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        decimals: 18,
        name: "Dai Stablecoin",
        symbol: "DAI",
      },
      {
        key: "usdc",
        type: "token",
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        decimals: 6,
        name: "USD Coin",
        symbol: "USDC",
      },
      {
        key: "wbtc",
        type: "token",
        address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        decimals: 8,
        name: "Wrapped BTC",
        symbol: "WBTC",
      },
      {
        key: "reth",
        type: "atoken",
        address: "0x8dAE6Cb04688C62d939ed9B68d32Bc62e49970b1",
        decimals: 18,
        name: "Rocket Pool ETH",
        symbol: "rETH",
      },
    ]),
  },
];
