import { createTokenUtils } from '../../utils'

export default createTokenUtils([
  { key: 'aeth', type: 'atoken', symbol: 'AETH', name: 'Aave ETH', address: '0x28424507fefb6f7f8E9D3860F56504E4e5f5f390', decimals: 18, factor: 0.8, root: 'eth' },
  { key: 'adai', type: 'atoken', symbol: 'ADAI', name: 'Aave DAI', address: '0x27F8D03b3a2196956ED754baDc28D73be8830A6e', decimals: 18, factor: 0.75, root: 'dai' },
  { key: 'ausdc', type: 'atoken', symbol: 'AUSDC', name: 'Aave USDC', address: '0x1a13F4Ca1d028320A707D99520AbFefca3998b7F', decimals: 6, factor: 0.8, root: 'usdc' },
  { key: 'ausdt', type: 'atoken', symbol: 'AUSDT', name: 'Aave USDT', address: '0x60D55F02A771d515e077c9C2403a1ef324885CeC', decimals: 6, factor: 0, root: 'usdt' },
  { key: 'awbtc', type: 'atoken', symbol: 'AWBTC', name: 'Aave WBTC', address: '0x5c2ed810328349100A66B82b78a1791B101C9D61', decimals: 8, factor: 0.7, root: 'wbtc' },
  { key: 'aaave', type: 'atoken', symbol: 'AAAVE', name: 'Aave AAVE', address: '0x1d2a0E5EC8E5bBDCA5CB219e649B565d8e5c3360', decimals: 18, factor: 0.5, root: 'aave' },
  { key: 'awmatic', type: 'atoken', symbol: 'AWMATIC', name: 'Aave WMATIC', address: '0x8dF3aad3a84da6b69A4DA8aeC3eA40d9091B2Ac4', decimals: 18, factor: 0.65, root: 'matic' },
  { key: 'asushi', type: 'atoken', symbol: 'ASUSHI', name: 'Aave SUSHI', address: '0x21eC9431B5B55c5339Eb1AE7582763087F98FAc2', decimals: 18, factor: 0.2, root: 'sushi' },
  { key: 'alink', type: 'atoken', symbol: 'ALINK', name: 'Aave LINK', address: '0x0Ca2e42e8c21954af73Bc9af1213E4e81D6a669A', decimals: 18, factor: 0.5, root: 'link' },
  { key: 'abal', type: 'atoken', symbol: 'ABAL', name: 'Aave BAL', address: '0xc4195D4060DaEac44058Ed668AA5EfEc50D77ff6', decimals: 18, factor: 0.2, root: 'bal' },
  { key: 'acrv', type: 'atoken', symbol: 'ACRV', name: 'Aave CRV', address: '0x3Df8f92b7E798820ddcCA2EBEA7BAbda2c90c4aD', decimals: 18, factor: 0.2, root: 'crv' },
  { key: 'adpi', type: 'atoken', symbol: 'ADPI', name: 'Aave DPI', address: '0x81fB82aAcB4aBE262fc57F06fD4c1d2De347D7B1', decimals: 18, factor: 0.2, root: 'dpi' },
  { key: 'aghst', type: 'atoken', symbol: 'AGHST', name: 'Aave GHST', address: '0x080b5BF8f360F624628E0fb961F4e67c9e3c7CF1', decimals: 18, factor: 0.25, root: 'ghst' }
])
