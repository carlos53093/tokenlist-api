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
  // {
  //   key: "wa2weth",
  //   type: "vaultToken",
  //   symbol: "wa2WETH",
  //   name: "ERC4626-Wrapped Aave v2 WETH",
  //   address: "0xc21F107933612eCF5677894d45fc060767479A9b",
  //   decimals: 18,
  // },
  // {
  //   key: "svxai",
  //   type: "vaultToken",
  //   symbol: "svXAI",
  //   name: "SideShift SideShift Token Vault",
  //   address: "0x3808708e761b988d23ae011ed0e12674fb66bd62",
  //   decimals: 18,
  // },
]);
