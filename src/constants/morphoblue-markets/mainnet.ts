import { createMorphoBlueMarketUtils } from "../../utils";

export default [
  {
    marketName: "Morpho-Blue",
    markets: createMorphoBlueMarketUtils([
      {
        id: "0xc54d7acf14de29e0e5527cabd7a576506870346a78a11a6762e2cca66322ec41",
        collateral: {
          key: "wsteth",
          type: "token",
          address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
          decimals: 18,
          name: "Wrapped liquid staked Ether 2.0 (wstETH)",
          symbol: "WSTETH",
          root: "wsteth",
        },
        debt: {
          key: "eth",
          type: "token",
          address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          decimals: 18,
          name: "Ethereum",
          symbol: "ETH",
          root: "eth",
        },
      },
      {
        id: "0xb323495f7e4148be5643a4ea4a8221eef163e4bccfdedc2a6f4696baacbc86cc",
        collateral: {
          key: "wsteth",
          type: "token",
          address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
          decimals: 18,
          name: "Wrapped liquid staked Ether 2.0 (wstETH)",
          symbol: "WSTETH",
          root: "wsteth",
        },
        debt: {
          key: "usdc",
          type: "token",
          address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          decimals: 6,
          name: "USDC (USDC)",
          symbol: "USDC",
          root: "usdc",
        },
      },
    ]),
  },
];
