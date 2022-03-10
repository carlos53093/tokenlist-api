import polygon from './polygon'
import arbitrum from './arbitrum'
import avalanche from './avalanche'
import mainnet from './mainnet'
import { createNetworkList } from 'src/utils'

export default createNetworkList({
  polygon,
  arbitrum,
  avalanche,
  mainnet
})
