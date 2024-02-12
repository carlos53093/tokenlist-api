import { createTokenUtils } from "../../utils";

export default createTokenUtils([
  {
    key: "fiusdc",
    type: "vaultToken",
    symbol: "fiUSDC",
    name: "Fluid Interest USD Coin (PoS)",
    address: "0x6e4770705cD7D1eDD4613e61D48d13Cac4bc044F",
    decimals: 18,
    isFluid: true,
  },
  {
    key: "fiweth",
    type: "vaultToken",
    symbol: "fiWETH",
    name: "Fluid Interest Wrapped Ether",
    address: "0xC29084a71875b3309F4B58F50acF9ed906244B72",
    decimals: 18,
    isFluid: true,
  },
  {
    key: "fimatic",
    type: "vaultToken",
    symbol: "fiWMATIC",
    name: "Fluid Interest Wrapped Matic",
    address: "0xC3Ce9C8D6C397F2088714a98c0bDe4E7Eb20f45E",
    decimals: 18,
    isFluid: true,
  },
]);
