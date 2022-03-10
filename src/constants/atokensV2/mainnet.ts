import { createTokenUtils } from '../../utils'

// prettier-ignore
export default createTokenUtils([
  { key: 'aeth', type: 'atoken', symbol: 'AETH', name: 'Aave ETH', address: '0x030bA81f1c18d280636F32af80b9AAd02Cf0854e', decimals: 18, factor: 0.8, root: 'eth' },
  { key: 'adai', type: 'atoken', symbol: 'ADAI', name: 'Aave DAI', address: '0x028171bCA77440897B824Ca71D1c56caC55b68A3', decimals: 18, factor: 0.75, root: 'dai' },
  { key: 'ausdc', type: 'atoken', symbol: 'AUSDC', name: 'Aave USDC', address: '0xBcca60bB61934080951369a648Fb03DF4F96263C', decimals: 6, factor: 0.8, root: 'usdc' },
  { key: 'ausdt', type: 'atoken', symbol: 'AUSDT', name: 'Aave USDT', address: '0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811', decimals: 6, factor: 0, root: 'usdt' },
  { key: 'asusd', type: 'atoken', symbol: 'ASUSD', name: 'Aave SUSD', address: '0x6C5024Cd4F8A59110119C56f8933403A539555EB', decimals: 18, factor: 0, root: 'susd' },
  { key: 'atusd', type: 'atoken', symbol: 'ATUSD', name: 'Aave TUSD', address: '0x101cc05f4A51C0319f570d5E146a8C625198e636', decimals: 18, factor: 0.75, root: 'tusd' },
  { key: 'arai', type: 'atoken', symbol: 'ARAI', name: 'Aave RAI', address: '0xc9BC48c72154ef3e5425641a3c747242112a46AF', decimals: 18, factor: 0, root: 'rai' },
  { key: 'abusd', type: 'atoken', symbol: 'ABUSD', name: 'Aave BUSD', address: '0xA361718326c15715591c299427c62086F69923D9', decimals: 18, factor: 0, root: 'busd' },
  { key: 'abat', type: 'atoken', symbol: 'ABAT', name: 'Aave BAT', address: '0x05Ec93c0365baAeAbF7AefFb0972ea7ECdD39CF1', decimals: 18, factor: 0.7, root: 'bat' },
  { key: 'aknc', type: 'atoken', symbol: 'AKNC', name: 'Aave KNC', address: '0x39C6b3e42d6A679d7D776778Fe880BC9487C2EDA', decimals: 18, factor: 0.6, root: 'knc' },
  { key: 'alink', type: 'atoken', symbol: 'ALINK', name: 'Aave LINK', address: '0xa06bC25B5805d5F8d82847D191Cb4Af5A3e873E0', decimals: 18, factor: 0.7, root: 'link' },
  { key: 'amana', type: 'atoken', symbol: 'AMANA', name: 'Aave MANA', address: '0xa685a61171bb30d4072B338c80Cb7b2c865c873E', decimals: 18, factor: 0.6, root: 'mana' },
  { key: 'amkr', type: 'atoken', symbol: 'AMKR', name: 'Aave MKR', address: '0xc713e5E149D5D0715DcD1c156a020976e7E56B88', decimals: 18, factor: 0.6, root: 'mkr' },
  { key: 'aren', type: 'atoken', symbol: 'AREN', name: 'Aave REN', address: '0xCC12AbE4ff81c9378D670De1b57F8e0Dd228D77a', decimals: 18, factor: 0.55, root: 'ren' },
  { key: 'asnx', type: 'atoken', symbol: 'ASNX', name: 'Aave SNX', address: '0x35f6B052C598d933D69A4EEC4D04c73A191fE6c2', decimals: 18, factor: 0.15, root: 'snx' },
  { key: 'awbtc', type: 'atoken', symbol: 'AWBTC', name: 'Aave WBTC', address: '0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656', decimals: 8, factor: 0.7, root: 'wbtc' },
  { key: 'ayfi', type: 'atoken', symbol: 'AYFI', name: 'Aave YFI', address: '0x5165d24277cD063F5ac44Efd447B27025e888f37', decimals: 18, factor: 0.4, root: 'yfi' },
  { key: 'azrx', type: 'atoken', symbol: 'AZRX', name: 'Aave ZRX', address: '0xDf7FF54aAcAcbFf42dfe29DD6144A69b629f8C9e', decimals: 18, factor: 0.6, root: 'zrx' },
  { key: 'aenj', type: 'atoken', symbol: 'AENJ', name: 'Aave ENJ', address: '0xaC6Df26a590F08dcC95D5a4705ae8abbc88509Ef', decimals: 18, factor: 0.55, root: 'enj' },
  { key: 'auni', type: 'atoken', symbol: 'AUNI', name: 'Aave UNI', address: '0xB9D7CB55f463405CDfBe4E90a6D2Df01C2B92BF1', decimals: 18, factor: 0.6, root: 'uni' },
  { key: 'aaave', type: 'atoken', symbol: 'AAAVE', name: 'Aave AAVE', address: '0xFFC97d72E13E01096502Cb8Eb52dEe56f74DAD7B', decimals: 18, factor: 0.5, root: 'aave' },
  { key: 'agusd', type: 'atoken', symbol: 'AGUSD', name: 'Aave GUSD', address: '0xD37EE7e4f452C6638c96536e68090De8cBcdb583', decimals: 2, factor: 0, root: 'gusd' },
  { key: 'abal', type: 'atoken', symbol: 'ABAL', name: 'Aave BAL', address: '0x272F97b7a56a387aE942350bBC7Df5700f8a4576', decimals: 18, factor: 0.55, root: 'bal' },
  { key: 'acrv', type: 'atoken', symbol: 'ACRV', name: 'Aave CRV', address: '0x8dAE6Cb04688C62d939ed9B68d32Bc62e49970b1', decimals: 18, factor: 0.40, root: 'crv' },
  { key: 'axsushi', type: 'atoken', symbol: 'AXSUSHI', name: 'Aave xSUSHI', address: '0xF256CC7847E919FAc9B808cC216cAc87CCF2f47a', decimals: 18, factor: 0.45, root: 'xsushi' },
  { key: 'adpi', type: 'atoken', symbol: 'ADPI', name: 'Aave DPI', address: '0x6F634c6135D2EBD550000ac92F494F9CB8183dAe', decimals: 18, factor: 0.6, root: 'dpi' },
  { key: 'aampl', type: 'atoken', symbol: 'AAMPL', name: 'Aave AMPL', address: '0x1e6bb68acec8fefbd87d192be09bb274170a0548', decimals: 9, factor: 0, root: 'ampl' },
  { key: 'ausdp', type: 'atoken', symbol: 'USDP', name: 'Aave USDP', address: '0x2e8f4bdbe3d47d7d7de490437aea9915d930f1a3', decimals: 18, factor: 0, root: 'usdp' },
  { key: 'arenfil', type: 'atoken', symbol: 'ARENFIL', name: 'Aave renFIL', address: '0x514cd6756CCBe28772d4Cb81bC3156BA9d1744aa', decimals: 18, factor: 0, root: 'renfil' },
  { key: 'afrax', type: 'atoken', symbol: 'AFRAX', name: 'Aave FRAX', address: '0xd4937682df3C8aEF4FE912A96A74121C0829E664', decimals: 18, factor: 0, root: 'frax' },
  { key: 'afei', type: 'atoken', symbol: 'AFEI', name: 'Aave FEI', address: '0x683923dB55Fead99A79Fa01A27EeC3cB19679cC3', decimals: 18, factor: 0, root: 'fei' },
  { key: 'asteth', type: 'atoken', symbol: 'ASTETH', name: 'Aave stETH', address: '0x1982b2F5814301d4e9a8b0201555376e62F82428', decimals: 18, factor: 0.7, root: 'steth' }
])
