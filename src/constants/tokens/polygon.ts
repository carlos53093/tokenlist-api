import { createTokenUtils } from "../../utils";

export default createTokenUtils([
  {
    key: "matic",
    type: "token",
    symbol: "MATIC",
    name: "MATIC",
    address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    decimals: 18,
    isStableCoin: false,
  },
  {
    key: "inst",
    type: "token",
    symbol: "INST",
    name: "Instadapp Token",
    address: "0xf50D05A1402d0adAfA880D36050736f9f6ee7dee",
    decimals: 18,
    isStableCoin: false,
  },
  {
    key: "eth",
    type: "token",
    symbol: "ETH",
    name: "Ethereum",
    address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    decimals: 18,
    isStableCoin: false,
  },
  {
    key: "dai",
    type: "token",
    symbol: "DAI",
    name: "DAI Stable",
    address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    decimals: 18,
    isStableCoin: true,
  },
  {
    key: "usdc",
    type: "token",
    symbol: "USDC",
    name: "USD Coin",
    address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    decimals: 6,
    isStableCoin: true,
  },
  {
    key: "usdt",
    type: "token",
    symbol: "USDT",
    name: "Tether USD Coin",
    address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    decimals: 6,
    isStableCoin: true,
  },
  {
    key: "wmatic",
    type: "token",
    symbol: "WMATIC",
    name: "Wrapped MATIC",
    address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    decimals: 18,
    isStableCoin: false,
  },
  {
    key: "stmatic",
    type: "token",
    symbol: "stMATIC",
    name: "Lido Staked MATIC",
    address: "0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4",
    decimals: 18,
    isStableCoin: false,
  },
  {
    key: "wbtc",
    type: "token",
    symbol: "WBTC",
    name: "Wrapped BTC",
    address: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
    decimals: 8,
    isStableCoin: false,
  },
  {
    key: "aave",
    type: "token",
    symbol: "AAVE",
    name: "Aave Token",
    address: "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
    decimals: 18,
    isStableCoin: false,
  },
  {
    key: "sushi",
    type: "token",
    symbol: "SUSHI",
    name: "Sushi Token",
    address: "0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a",
    decimals: 18,
    isStableCoin: false,
  },
  {
    key: "bal",
    type: "token",
    symbol: "BAL",
    name: "balancer Token",
    address: "0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3",
    decimals: 18,
    isStableCoin: false,
  },
  {
    key: "crv",
    type: "token",
    symbol: "CRV",
    name: "CRV Token",
    address: "0x172370d5Cd63279eFa6d502DAB29171933a610AF",
    decimals: 18,
    isStableCoin: false,
  },
  {
    key: "dpi",
    type: "token",
    symbol: "DPI",
    name: "DPI Token",
    address: "0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369",
    decimals: 18,
    isStableCoin: false,
  },
  {
    key: "link",
    type: "token",
    symbol: "LINK",
    name: "ChainLink Token",
    address: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
    decimals: 18,
    isStableCoin: false,
  },
  {
    key: "ghst",
    type: "token",
    symbol: "GHST",
    name: "Aavegotchi GHST Token",
    address: "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7",
    decimals: 18,
    isStableCoin: false,
  },
  {
    key: "jeur",
    type: "token",
    symbol: "JEUR",
    name: "Jarvis Synthetic Euro Token",
    address: "0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c",
    decimals: 18,
    isStableCoin: false,
  },
  {
    key: "eurs",
    type: "token",
    symbol: "EURS",
    name: "Statis EURS Token",
    address: "0xE111178A87A3BFf0c8d18DECBa5798827539Ae99",
    decimals: 2,
    isStableCoin: false,
  },
  {
    key: "ageur",
    type: "token",
    symbol: "AGEUR",
    name: "aGEUR Token",
    address: "0xE0B52e49357Fd4DAf2c15e02058DCE6BC0057db4",
    decimals: 18,
    isStableCoin: false,
  },
  {
    key: "ldo",
    type: "token",
    symbol: "LDO",
    name: "Lido DAO Token",
    address: "0xC3C7d422809852031b44ab29EEC9F1EfF2A58756",
    decimals: 18,
    isStableCoin: false,
  },
  {
    key: "mimatic",
    type: "token",
    symbol: "miMATIC",
    name: "miMATIC Token",
    address: "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
    decimals: 18,
    isStableCoin: false,
  },
  {
    key: "maticx",
    type: "token",
    symbol: "MaticX",
    name: "Liquid Staking Matic Token",
    address: "0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6",
    decimals: 18,
    isStableCoin: false,
  },
  {
    key: "sd",
    type: "token",
    symbol: "SD",
    name: "Stader (POS)",
    address: "0x1d734A02eF1e1f5886e66b0673b71Af5B53ffA94",
    decimals: 18,
    isStableCoin: false,
  },
  {
    key: "sd",
    type: "token",
    symbol: "SD",
    name: "Stader (POS)",
    address: "0x1d734A02eF1e1f5886e66b0673b71Af5B53ffA94",
    decimals: 18,
    isStableCoin: false,
  },
  {
    key: "comp",
    type: "token",
    symbol: "COMP",
    name: "(PoS) Compound",
    address: "0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c",
    decimals: 18,
    isStableCoin: false,
  },
]);
