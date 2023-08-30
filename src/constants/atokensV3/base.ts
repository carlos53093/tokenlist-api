import { createTokenUtils } from "../../utils";

export default createTokenUtils([
  {
    key: "acbeth",
    type: "atoken",
    symbol: "ACBETH",
    name: "Aave CBETH",
    address: "0xcf3D55c10DB69f28fD1A75Bd73f3D8A2d9c595ad",
    decimals: 18,
    factor: 0.67,
    root: "cbeth",
  },
  {
    key: "aeth",
    type: "atoken",
    symbol: "AETH",
    name: "Aave ETH",
    address: "0xD4a0e0b9149BCee3C920d2E00b5dE09138fd8bb7",
    decimals: 18,
    factor: 0.8,
    root: "eth",
  },
  {
    key: "ausdbc",
    type: "atoken",
    symbol: "AUSDBC",
    name: "Aave Base USDbC",
    address: "0x0a1d576f3eFeF75b330424287a95A366e8281D54",
    decimals: 6,
    factor: 0.77,
    root: "usdbc",
  },
]);
