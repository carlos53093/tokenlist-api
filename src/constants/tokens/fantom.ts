import { createTokenUtils } from '../../utils'

export default createTokenUtils([
  {
    key: 'ftm',
    type: 'token',
    symbol: 'FTM',
    name: 'fantom',
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    decimals: 18,
    isStableCoin: false
  },
  {
    key: 'wftm',
    type: 'token',
    symbol: 'WFTM',
    name: 'Wrapped Fantom',
    address: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    decimals: 18,
    isStableCoin: false
  },
  {
    key: 'weth',
    type: 'token',
    symbol: 'WETH',
    name: 'Wrapped Ethereum',
    address: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
    decimals: 18,
    isStableCoin: false
  },
  {
    key: 'usdc',
    type: 'token',
    symbol: 'USDC',
    name: 'USD Coin',
    address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    decimals: 6,
    isStableCoin: true
  },
  {
    key: 'dai',
    type: 'token',
    symbol: 'DAI',
    name: 'DAI Stable',
    address: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
    decimals: 18,
    isStableCoin: true
  },
  {
    key: 'btc',
    type: 'token',
    symbol: 'BTC',
    name: 'Bitcoin',
    address: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
    decimals: 8,
    isStableCoin: false
  },
  {
    key: 'link',
    type: 'token',
    symbol: 'LINK',
    name: 'Chainlink token',
    address: '0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8',
    decimals: 18,
    isStableCoin: false
  },
  {
    key: 'fusdt',
    type: 'token',
    symbol: 'fUSDT',
    name: 'Frapper usdt token',
    address: '0x049d68029688eAbF473097a2fC38ef61633A3C7A',
    decimals: 6,
    isStableCoin: true
  },
  {
    key: 'aave',
    type: 'token',
    symbol: 'AAVE',
    name: 'Aave token',
    address: '0x6a07A792ab2965C72a5B8088d3a069A7aC3a993B',
    decimals: 18,
    isStableCoin: false
  },
  {
    key: 'crv',
    type: 'token',
    symbol: 'CRV',
    name: 'CRV Token',
    address: '0x1E4F97b9f9F913c46F1632781732927B9019C68b',
    decimals: 18,
    isStableCoin: false
  },
  {
    key: 'sushi',
    type: 'token',
    symbol: 'SUSHI',
    name: 'Sushi Token',
    address: '0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC',
    decimals: 18,
    isStableCoin: false
  }
])
