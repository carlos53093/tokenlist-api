import { createTokenUtils } from '../../utils'

export default createTokenUtils([
  {
    key: 'eth',
    type: 'token',
    symbol: 'ETH',
    name: 'Ethereum',
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    decimals: 18,
    isStableCoin: false
  },
  {
    key: 'weth',
    type: 'token',
    symbol: 'WETH',
    name: 'Wrapped Ethereum',
    address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    decimals: 18,
    isStableCoin: false
  },
  {
    key: 'usdc',
    type: 'token',
    symbol: 'USDC',
    name: 'USD Coin',
    address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    decimals: 6,
    isStableCoin: true
  },
  {
    key: 'usdt',
    type: 'token',
    symbol: 'USDT',
    name: 'Tether USD Coin',
    address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    decimals: 6,
    isStableCoin: true
  },
  {
    key: 'link',
    type: 'token',
    symbol: 'LINK',
    name: 'ChainLink Token',
    address: '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4',
    decimals: 18,
    isStableCoin: false
  },
  {
    key: 'uni',
    type: 'token',
    symbol: 'UNI',
    name: 'Uniswap Token',
    address: '0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0',
    decimals: 18,
    isStableCoin: false
  },
  {
    key: 'wbtc',
    type: 'token',
    symbol: 'WBTC',
    name: 'Wrapped BTC',
    address: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
    decimals: 8,
    isStableCoin: false
  },
  {
    key: 'dai',
    type: 'token',
    symbol: 'DAI',
    name: 'Dai Stable',
    address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    decimals: 18,
    isStableCoin: true
  },
  {
    key: 'eurs',
    type: 'token',
    symbol: 'EURS',
    name: 'Statis EURS',
    address: '0xD22a58f79e9481D1a88e00c343885A588b34b68B',
    decimals: 18,
    isStableCoin: false
  }
])
