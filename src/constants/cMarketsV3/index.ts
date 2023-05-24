import { createNetworkList } from "../../utils";
import mainnet from "./mainnet";
import polygon from "./polygon";
import arbitrum from "./arbitrum";

export default createNetworkList({
  mainnet,
  polygon,
  arbitrum,
});
