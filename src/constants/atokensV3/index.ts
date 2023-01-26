import { createNetworkList } from "../../utils";
import mainnet from "./mainnet";
import polygon from "./polygon";
import arbitrum from "./arbitrum";
import avalanche from "./avalanche";
import optimism from "./optimism";
import fantom from "./fantom";

export default createNetworkList({
  mainnet,
  polygon,
  arbitrum,
  avalanche,
  optimism,
  fantom,
});
