import polygon from './polygon'
import arbitrum from './arbitrum'
import mainnet from './mainnet'
import { createNetworkList } from '../../utils'

export default createNetworkList({
  polygon,
  arbitrum,
  mainnet
})
