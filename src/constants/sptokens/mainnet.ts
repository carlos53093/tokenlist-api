import { createTokenUtils } from "../../utils";

export default createTokenUtils([
  {
    key: "speth",
    type: "sptoken",
    symbol: "SPETH",
    name: "Spark ETH",
    address: "0x59cD1C87501baa753d0B5B5Ab5D8416A45cD71DB",
    decimals: 18,
    factor: 0.8,
    root: "eth",
  },
  {
    key: "spdai",
    type: "sptoken",
    symbol: "SPDAI",
    name: "Spark DAI",
    address: "0x4DEDf26112B3Ec8eC46e7E31EA5e123490B05B8B",
    decimals: 18,
    factor: 0.74,
    root: "dai",
  },
  {
    key: "spsdai",
    type: "sptoken",
    symbol: "SPSDAI",
    name: "Spark Savings DAI",
    address: "0x78f897F0fE2d3B5690EbAe7f19862DEacedF10a7",
    decimals: 18,
    factor: 0.74,
    root: "sdai",
  },
  {
    key: "spusdc",
    type: "sptoken",
    symbol: "SPUSDC",
    name: "Spark USDC",
    address: "0x377C3bd93f2a2984E1E7bE6A5C22c525eD4A4815",
    decimals: 6,
    factor: 0,
    root: "usdc",
  },
  {
    key: "spwbtc",
    type: "sptoken",
    symbol: "SPWBTC",
    name: "Spark WBTC",
    address: "0x4197ba364AE6698015AE5c1468f54087602715b2",
    decimals: 8,
    factor: 0.7,
    root: "wbtc",
  },
  {
    key: "spwsteth",
    type: "sptoken",
    symbol: "SPWSTETH",
    name: "Spark WSTETH",
    address: "0x12B54025C112Aa61fAce2CDB7118740875A566E9",
    decimals: 18,
    factor: 0.685,
    root: "wsteth",
  },
]);
