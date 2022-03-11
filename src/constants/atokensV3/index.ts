import polygon from './polygon'
import arbitrum from './arbitrum'
import avalanche from './avalanche'
import optimism from './optimism'
import { createNetworkList } from '../../utils'

export default createNetworkList({
  polygon,
  arbitrum,
  avalanche,
  optimism,
})
