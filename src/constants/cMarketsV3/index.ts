import { createNetworkList } from "../../utils";
import mainnet from "./mainnet";
import polygon from "./polygon";
import arbitrum from "./arbitrum";
import base from "./base";

export default createNetworkList({
  mainnet,
  polygon,
  arbitrum,
  base,
});
