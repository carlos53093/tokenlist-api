import { createTokenUtils } from "../../utils";

export default createTokenUtils([
  {
    key: "fiusdc",
    type: "vaultToken",
    symbol: "fiUSDC",
    name: "Fluid Interest USD Coin (PoS)",
    address: "0xd3be3E2dFa8B5fa249cb94eCf2a439DaF0A1Ab20",
    decimals: 18,
    isFluid: true,
  },
  {
    key: "fiweth",
    type: "vaultToken",
    symbol: "fiWETH",
    name: "Fluid Interest Wrapped Ether",
    address: "0xd3502E42592A08d7157B642bBd092ddf39e3ae8F",
    decimals: 18,
    isFluid: true,
  },
]);
