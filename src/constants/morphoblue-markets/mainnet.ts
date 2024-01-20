import { createMorphoBlueMarketUtils } from "../../utils";

export default [
  {
    marketName: "Morpho-Blue",
    markets: createMorphoBlueMarketUtils([
      {
        id: "0xc54d7acf14de29e0e5527cabd7a576506870346a78a11a6762e2cca66322ec41",
        oracle: "0x2a01EB9496094dA03c4E364Def50f5aD1280AD72",
        irm: "0x870aC11D48B15DB9a138Cf899d20F13F79Ba00BC",
        ltv: 0.945,
        collateralKey: "wsteth",
        debtKey: "eth",
      },
      {
        id: "0xb323495f7e4148be5643a4ea4a8221eef163e4bccfdedc2a6f4696baacbc86cc",
        oracle: "0x48F7E36EB6B826B2dF4B2E630B62Cd25e89E40e2",
        irm: "0x870aC11D48B15DB9a138Cf899d20F13F79Ba00BC",
        ltv: 0.86,
        collateralKey: "wsteth",
        debtKey: "usdc",
      },
    ]),
  },
];
