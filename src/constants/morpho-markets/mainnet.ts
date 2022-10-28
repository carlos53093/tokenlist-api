import { createTokenUtils } from "../../utils";

export default [
  {
    key: 'compound', 
    marketName: 'Morpho-Compound', 
    market: 'compound',
    tokens: createTokenUtils([
      {
        key: "cdai",
        type: "ctoken",
        address: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
        decimals: 8,
        underlyingAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        name: 'Compound DAI',
        symbol: 'cDAI',
        underlyingDecimals: 18,
        factor: 0.835,
        root: 'dai'
      },
      {
        key: "ccomp",
        type: "ctoken",
        address: '0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4',
        decimals: 8,
        underlyingAddress: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
        name: 'Compound Collateral',
        symbol: 'cCOMP',
        underlyingDecimals: 18,
        factor: 0.65,
        root: "comp",
      }, 
      {
        key:'ceth',
        type: "ctoken",
        address: '0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5',
        decimals: 8,
        underlyingAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
        name: 'Compound Ether',
        symbol: 'cETH',
        underlyingDecimals: 18,
        factor: 0.825,
        root: 'eth'
      },
      {
        key:'cfei',
        type: "ctoken",
        address: '0x7713DD9Ca933848F6819F38B8352D9A15EA73F67',
        decimals: 8,
        underlyingAddress: '0x956F47F50A910163D8BF957Cf5846D573E7f87CA',
        name: 'Compound Fei USD',
        symbol: 'cFEI',
        underlyingDecimals: 18,
        factor: 0,
        root: 'fei'
      },
      {
        key:'cuni',
        type: "ctoken",
        address: '0x35A18000230DA775CAc24873d00Ff85BccdeD550',
        decimals: 8,
        underlyingAddress: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
        name: 'Compound Uniswap',
        symbol: 'cUNI',
        underlyingDecimals: 18,
        factor: 0.75,
        root: 'uni'
      },
      {
        key:'cusdc',
        type: "ctoken",
        address: '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
        decimals: 8,
        underlyingAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        name: 'Compound USD Coin',
        symbol: 'cUSDC',
        underlyingDecimals: 6,
        factor: 0.855,
        root: 'usdc'
      },
      {
        key:'cusdt',
        type: "ctoken",
        address: '0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9',
        decimals: 8,
        underlyingAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        name: 'Compound USDT',
        symbol: 'cUSDT',
        underlyingDecimals: 6,
        factor: 0,
        root: 'usdt'
      },
      {
        key:'cwbtc',
        type: "ctoken",
        address: '0xccF4429DB6322D5C611ee964527D42E5d685DD6a',
        decimals: 8,
        underlyingAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        name: 'Compound Wrapped BTC',
        symbol: 'cWBTC',
        underlyingDecimals: 8,
        factor: 0.7,
        root: 'wbtc'
      }
    ]),
  },
  {
    key: 'aave', 
    marketName: 'Morpho-Aave', 
    market: 'aave',
    tokens: createTokenUtils([
      {
        key: "adai",
        type: "atoken",
        address: '0x028171bCA77440897B824Ca71D1c56caC55b68A3',
        decimals: 18,
        underlyingAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        name: 'Aave interest bearing DAI',
        symbol: 'aDAI',
        underlyingDecimals: 18,
        factor: 0.77,
        root: 'dai'
      },
      {
        key: "aweth",
        type: "atoken",
        address: '0x030bA81f1c18d280636F32af80b9AAd02Cf0854e',
        decimals: 18,
        underlyingAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        name: 'Aave interest bearing WETH',
        symbol: 'aWETH',
        underlyingDecimals: 18,
        factor: 0.825,
        root: 'weth'
     }, 
     {
        key: "ausdc",
        type: "atoken",
        address: '0xBcca60bB61934080951369a648Fb03DF4F96263C',
        decimals: 6,
        underlyingAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        name: 'Aave interest bearing USDC',
        symbol: 'aUSDC',
        underlyingDecimals: 6,
        factor: 0.87,
        root: 'usdc'
     }, 
     {
        key: "ausdt",
        type: "atoken",
        address: '0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811',
        decimals: 6,
        underlyingAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        name: 'Aave interest bearing USDT',
        symbol: 'aUSDT',
        underlyingDecimals: 6,
        factor: 0,
        root: 'usdt'
     }, 
     {
        key: "awbtc",
        type: "atoken",
        address: '0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656',
        decimals: 8,
        underlyingAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        name: 'Aave interest bearing WBTC',
        symbol: 'aWBTC',
        underlyingDecimals: 8,
        factor: 0.72,
        root: 'wbtc'
     }, 
     {
        key: "asteth",
        type: "atoken",
        address: '0x1982b2F5814301d4e9a8b0201555376e62F82428',
        decimals: 18,
        underlyingAddress: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
        name: 'Aave interest bearing STETH',
        symbol: 'aSTETH',
        underlyingDecimals: 18,
        factor: 0.72,
        root: 'steth'
     }, 
     {
        key: "acrv",
        type: "atoken",
        address: '0x8dAE6Cb04688C62d939ed9B68d32Bc62e49970b1',
        decimals: 18,
        underlyingAddress: '0xD533a949740bb3306d119CC777fa900bA034cd52',
        name: 'Aave interest bearing CRV',
        symbol: 'aCRV',
        underlyingDecimals: 18,
        factor: 0.55,
        root: 'crv'
     }
    ]),
  },
];
