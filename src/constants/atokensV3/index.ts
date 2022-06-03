import { createNetworkList } from '../../utils'
import polygon from './polygon'
import arbitrum from './arbitrum'
import avalanche from './avalanche'
import optimism from './optimism'
import fantom from './fantom'

export default createNetworkList({
  polygon,
  arbitrum,
  avalanche,
  optimism,
  fantom,
})
