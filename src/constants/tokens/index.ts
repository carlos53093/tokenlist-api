import { createNetworkList } from '../../utils'
import polygon from './polygon'
import arbitrum from './arbitrum'
import avalanche from './avalanche'
import optimism from './optimism'
import mainnet from './mainnet'
import fantom from './fantom'

export default createNetworkList({
  polygon,
  arbitrum,
  avalanche,
  optimism,
  mainnet,
  fantom,
})
