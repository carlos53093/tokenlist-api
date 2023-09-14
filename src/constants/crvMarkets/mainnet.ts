import { createCurveUtils } from "../../utils";

export default {
  debt: {
    address: "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E",
    name: "Curve.Fi USD Stablecoin",
    key: "crvusd",
    symbol: "crvUSD",
  },
  markets: createCurveUtils([
    {
      market: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
      marketVersion: "0",
      symbol: "wstETH",
      name: "Wrapped liquid staked Ether 2.0",
      key: "wsteth",
      decimals: 18,
    },
    {
      market: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      marketVersion: "0",
      symbol: "WBTC",
      key: "wbtc",
      name: "Wrapped BTC",
      decimals: 8,
    },
    {
      market: "0xac3e018457b222d93114458476f3e3416abbe38f",
      marketVersion: "0",
      symbol: "sfrxETH",
      key: "sfrxeth",
      name: "Staked Frax Ether",
      decimals: 18,
    },
    {
      market: "0x18084fba666a33d37592fa2633fd49a74dd93a88",
      marketVersion: "0",
      symbol: "tBTC",
      key: "tbtc",
      name: "tBTC v2",
      decimals: 18,
    },
    {
      market: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      marketVersion: "0",
      symbol: "ETH",
      key: "eth",
      name: "ETH",
      decimals: 18,
    },
    {
      market: "0xac3e018457b222d93114458476f3e3416abbe38f",
      marketVersion: "1",
      symbol: "sfrxETH",
      key: "sfrxeth",
      name: "Staked Frax Ether",
      decimals: 18,
    },
  ]),
};
