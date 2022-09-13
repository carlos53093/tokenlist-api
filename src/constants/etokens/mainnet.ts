import { createTokenUtils } from "../../utils";

// prettier-ignore
export default createTokenUtils([
  {
    key: 'eusdc',
    type: 'etoken',
    symbol: 'EUSDC',
    name: 'Euler USD Coin',
    address: '0xEb91861f8A4e1C12333F42DCE8fB0Ecdc28dA716',
    decimals: 6,
    root: 'usdc',
  },
  {
    key: 'ewsteth',
    type: 'etoken',
    symbol: 'EWSTETH',
    name: 'Euler Lido Wrapped stETH Token',
    address: '0xbd1bd5C956684f7EB79DA40f582cbE1373A1D593',
    decimals: 18,
    root: 'wsteth',
  },
  {
    key: 'edai',
    type: 'etoken',
    symbol: 'EDAI',
    name: 'Euler DAI Stable',
    address: '0xe025E3ca2bE02316033184551D4d3Aa22024D9DC',
    decimals: 18,
    root: 'dai',
  },
  {
    key: 'eeth',
    type: 'etoken',
    symbol: 'EETH',
    name: 'Euler Ethereum',
    address: '0x1b808F49ADD4b8C6b5117d9681cF7312Fcf0dC1D',
    decimals: 18,
    root: 'eth',
  },
  {
    key: 'ewbtc',
    type: 'etoken',
    symbol: 'EWBTC',
    name: 'Euler Wrapped BTC',
    address: '0x0275b156cD77c5ed82D44bCc5f9E93eECff20138',
    decimals: 8,
    root: 'wbtc',
  },
  {
    key: 'eusdt',
    type: 'etoken',
    symbol: 'EUSDT',
    name: 'Euler Tether USD Coin',
    address: '0x4d19F33948b99800B6113Ff3e83beC9b537C85d2',
    decimals: 6,
    root: 'usdt',
  },
  {
    key: 'eageur',
    name: 'Euler agEUR',
    symbol: 'EAGEUR',
    decimals: 18,
    address: '0x64ad6d2472de5DDd3801fB4027C96c3ee7a7ee82',
    type: 'etoken',
    root: 'ageur',
  },
  {
    key: 'euni',
    type: 'etoken',
    symbol: 'EUNI',
    name: 'Euler Uniswap Token',
    address: '0xf1F2ECb2F271Ad31DD9204BFE91b8d1724E9d616',
    decimals: 18,
    root: 'uni',
  },
  {
    key: 'elink',
    type: 'etoken',
    symbol: 'ELINK',
    name: 'Euler ChainLink Token',
    address: '0x22784dd51676b5FB0E8362D187137f2ffFb9B848',
    decimals: 18,
    root: 'link',
  },
  {
    key: 'eens',
    name: 'Euler Ethereum Name Service',
    symbol: 'EENS',
    decimals: 18,
    address: '0x323aa5Ff5Cc6593dB46c93b20cCFDD06412baF77',
    type: 'etoken',
    root: 'ens',
  },
  {
    key: 'ematic',
    type: 'etoken',
    symbol: 'EMATIC',
    name: 'Euler Matic Token',
    address: '0x315bfbFBb8421fe80A83358020F169f867bb9716',
    decimals: 18,
    root: 'matic',
  },
  {
    key: 'eshib',
    name: 'Euler SHIBA INU',
    symbol: 'ESHIB',
    decimals: 18,
    address: '0x2eE4ADbf628C52Bc396ce1344116962f4a2143E9',
    type: 'etoken',
    root: 'shib',
  },
  {
    key: 'eosqth',
    name: 'Euler Opyn Squeeth',
    symbol: 'EOSQTH',
    decimals: 18,
    address: '0xe2322F73fDF8EE688B1464A19E539B599d43d1B7',
    type: 'etoken',
    root: 'osqth',
  },
  {
    key: 'erbn',
    name: 'Euler Ribbon',
    symbol: 'ERBN',
    decimals: 18,
    address: '0xfa327EB9111a5283167734efb637DB46C990A27b',
    type: 'etoken',
    root: 'rbn',
  },
  {
    key: 'emkr',
    type: 'etoken',
    symbol: 'EMKR',
    name: 'Euler MakerDAO',
    address: '0x50552EC440099672250bD5F335EF70E1202D0a42',
    decimals: 18,
    root: 'mkr',
  },
  {
    key: 'ecvx',
    name: 'Euler Convex Token',
    symbol: 'ECVX',
    decimals: 18,
    address: '0xe41FA3E32F7A3148217724A9F8D096f4F1ddD182',
    type: 'etoken',
    root: 'cvx',
  },
  {
    key: 'eperp',
    name: 'Euler Perpetual',
    symbol: 'EPERP',
    decimals: 18,
    address: '0x391b6F14Ed4D49C9D217A819118Ef379613d37Dd',
    type: 'etoken',
    root: 'perp',
  },
  {
    key: 'eaxs',
    name: 'Euler Axie Infinity Shard',
    symbol: 'EAXS',
    decimals: 18,
    address: '0x912eD8bcb1957cB501924C3A45a6510df76B80d9',
    type: 'etoken',
    root: 'axs',
  },
])
