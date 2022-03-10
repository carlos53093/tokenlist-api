import { createTokenUtils } from '../../utils'

export default createTokenUtils([
  { key: 'avax', type: 'token', symbol: 'AVAX', name: 'Avalanche', address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', decimals: 18, isStableCoin: false },
  { key: 'wavax', type: 'token', symbol: 'WAVAX', name: 'Wrapped AVAX', address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', decimals: 18, isStableCoin: false },
  { key: 'eth', type: 'token', symbol: 'ETH', name: 'Ethereum', address: '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB', decimals: 18, isStableCoin: false },
  { key: 'usdt', type: 'token', symbol: 'USDT', name: 'Tether USD Coin', address: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118', decimals: 6, isStableCoin: true },
  { key: 'aave', type: 'token', symbol: 'AAVE', name: 'Aave Token', address: '0x63a72806098Bd3D9520cC43356dD78afe5D386D9', decimals: 18, isStableCoin: false },
  { key: 'usdc', type: 'token', symbol: 'USDC', name: 'USD Coin', address: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664', decimals: 6, isStableCoin: true },
  { key: 'wbtc', type: 'token', symbol: 'WBTC', name: 'Wrapped BTC', address: '0x50b7545627a5162F82A992c33b87aDc75187B218', decimals: 8, isStableCoin: false },
  { key: 'dai', type: 'token', symbol: 'DAI', name: 'DAI Stable', address: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70', decimals: 18, isStableCoin: true },
  { key: 'qi', type: 'token', symbol: 'QI', name: 'Benqi', address: '0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5', decimals: 18, isStableCoin: false },
  { key: 'link', type: 'token', symbol: 'LINK', name: 'Chainlink', address: '0x5947BB275c521040051D82396192181b413227A3', decimals: 18, isStableCoin: false },
])
