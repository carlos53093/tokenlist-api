import { createTokenUtils } from '../../utils'

export default createTokenUtils([
  { key: "avweth", "type": "atoken", "symbol": "avWETH", "name": "Aave ETH", "address": "0x53f7c5869a859F0AeC3D334ee8B4Cf01E3492f21", "decimals": 18, "factor": 0.8, "root": "eth" },
  { key: "avdai", "type": "atoken", "symbol": "avDAI", "name": "Aave DAI", "address": "0x47AFa96Cdc9fAb46904A55a6ad4bf6660B53c38a", "decimals": 18, "factor": 0, "root": "dai" },
  { key: "avusdc", "type": "atoken", "symbol": "avUSDC", "name": "Aave USDC", "address": "0x46A51127C3ce23fb7AB1DE06226147F446e4a857", "decimals": 6, "factor": 0.8, "root": "usdc" },
  { key: "avusdt", "type": "atoken", "symbol": "avUSDT", "name": "Aave USDT", "address": "0x532E6537FEA298397212F09A61e03311686f548e", "decimals": 6, "factor": 0, "root": "usdt" },
  { key: "avwbtc", "type": "atoken", "symbol": "avWBTC", "name": "Aave WBTC", "address": "0x686bEF2417b6Dc32C50a3cBfbCC3bb60E1e9a15D", "decimals": 8, "factor": 0.6, "root": "wbtc" },
  { key: "avaave", "type": "atoken", "symbol": "avAAVE", "name": "Aave AAVE", "address": "0xD45B7c061016102f9FA220502908f2c0f1add1D7", "decimals": 18, "factor": 0, "root": "aave" },
  { key: "avwavax", "type": "atoken", "symbol": "avWAVAX", "name": "Aave WAVAX", "address": "0xDFE521292EcE2A4f44242efBcD66Bc594CA9714B", "decimals": 8, "factor": 0, "root": "avax" },
])
