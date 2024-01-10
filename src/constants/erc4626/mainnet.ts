import { createTokenUtils } from "../../utils";

export default createTokenUtils([
  {
    key: "sdai",
    type: "vaultToken",
    symbol: "sDAI",
    name: "Savings Dai",
    address: "0x83F20F44975D03b1b09e64809B757c47f942BEeA",
    decimals: 18,
  },
  {
    key: "bbeth",
    type: "vaultToken",
    symbol: "bbETH",
    name: "Flagship ETH",
    address: "0x38989BBA00BDF8181F4082995b3DEAe96163aC5D",
    decimals: 18,
  },
  {
    key: "steakusdc",
    type: "vaultToken",
    symbol: "steakUSDC",
    name: "Steakhouse USDC",
    address: "0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB",
    decimals: 18,
  },
]);
