import { createTokenUtils } from '../../utils'

export default createTokenUtils([
  { key: 'eth', type: 'token', symbol: 'ETH', name: 'Ethereum', address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', decimals: 18, isStableCoin: false },
  { key: 'weth', type: 'token', symbol: 'WETH', name: 'Wrapped Ethereum', address: '0x4200000000000000000000000000000000000006', decimals: 18, isStableCoin: false },
  { key: 'usdc', type: 'token', symbol: 'USDC', name: 'USD Coin', address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', decimals: 6, isStableCoin: true },
  { key: 'usdt', type: 'token', symbol: 'USDT', name: 'Tether USD Coin', address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', decimals: 6, isStableCoin: true },
  { key: 'dai', type: 'token', symbol: 'DAI', name: 'DAI Stable', address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', decimals: 18, isStableCoin: true },
  { key: 'uni', type: 'token', symbol: 'UNI', name: 'Uniswap Token', address: '0x6fd9d7AD17242c41f7131d257212c54A0e816691', decimals: 18, isStableCoin: false },
  { key: 'wbtc', type: 'token', symbol: 'WBTC', name: 'Wrapped BTC', address: '0x68f180fcCe6836688e9084f035309E29Bf0A2095', decimals: 8, isStableCoin: false },
])
