import { createMorphoBlueMarketUtils } from "../../utils";

export default [
  {
    marketName: "Morpho-Blue",
    markets: createMorphoBlueMarketUtils([
      {
        id: "0xc54d7acf14de29e0e5527cabd7a576506870346a78a11a6762e2cca66322ec41",
        oracle: "0x2a01EB9496094dA03c4E364Def50f5aD1280AD72",
        irm: "0x870aC11D48B15DB9a138Cf899d20F13F79Ba00BC",
        ltv: 945000000000000000,
        collateralKey: "wsteth",
        debtKey: "eth",
      },
      {
        id: "0xb323495f7e4148be5643a4ea4a8221eef163e4bccfdedc2a6f4696baacbc86cc",
        oracle: "0x48F7E36EB6B826B2dF4B2E630B62Cd25e89E40e2",
        irm: "0x870aC11D48B15DB9a138Cf899d20F13F79Ba00BC",
        ltv: 860000000000000000,
        collateralKey: "wsteth",
        debtKey: "usdc",
      },
      {
        id: "0xa921ef34e2fc7a27ccc50ae7e4b154e16c9799d3387076c421423ef52ac4df99",
        oracle: "0x008bF4B1cDA0cc9f0e882E0697f036667652E1ef",
        irm: "0x870aC11D48B15DB9a138Cf899d20F13F79Ba00BC",
        ltv: 860000000000000000,
        collateralKey: "wbtc",
        debtKey: "usdt",
      },
      {
        id: "0x3a85e619751152991742810df6ec69ce473daef99e28a64ab2340d7b7ccfee49",
        oracle: "0xDddd770BADd886dF3864029e4B377B5F6a2B6b83",
        irm: "0x870aC11D48B15DB9a138Cf899d20F13F79Ba00BC",
        ltv: 860000000000000000,
        collateralKey: "wbtc",
        debtKey: "usdc",
      },
      {
        id: "0x698fe98247a40c5771537b5786b2f3f9d78eb487b4ce4d75533cd0e94d88a115",
        oracle: "0x3fa58b74e9a8eA8768eb33c8453e9C2Ed089A40a",
        irm: "0x870aC11D48B15DB9a138Cf899d20F13F79Ba00BC",
        ltv: 860000000000000000,
        collateralKey: "weeth",
        debtKey: "eth",
      },
      {
        id: "0xd5211d0e3f4a30d5c98653d988585792bb7812221f04801be73a44ceecb11e89",
        oracle: "0x224F2F1333b45E34fFCfC3bD01cE43C73A914498",
        irm: "0x870aC11D48B15DB9a138Cf899d20F13F79Ba00BC",
        ltv: 860000000000000000,
        collateralKey: "oseth",
        debtKey: "eth",
      },
      {
        id: "0xe7e9694b754c4d4f7e21faf7223f6fa71abaeb10296a4c43a54a7977149687d2",
        oracle: "0x95DB30fAb9A3754e42423000DF27732CB2396992",
        irm: "0x870aC11D48B15DB9a138Cf899d20F13F79Ba00BC",
        ltv: 860000000000000000,
        collateralKey: "wsteth",
        debtKey: "usdt",
      },
      {
        id: "0xe7e9694b754c4d4f7e21faf7223f6fa71abaeb10296a4c43a54a7977149687d2",
        oracle: "0x95DB30fAb9A3754e42423000DF27732CB2396992",
        irm: "0x870aC11D48B15DB9a138Cf899d20F13F79Ba00BC",
        ltv: 860000000000000000,
        collateralKey: "wsteth",
        debtKey: "usdt",
      },
    ]),
  },
];
