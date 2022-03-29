import polygon from './polygon'
import avalanche from './avalanche'
import mainnet from './mainnet'
import { createNetworkList } from '../../utils'

export default createNetworkList({
  polygon,
  avalanche,
  mainnet
})
