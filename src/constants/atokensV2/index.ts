import { createNetworkList } from "../../utils";
import polygon from "./polygon";
import avalanche from "./avalanche";
import mainnet from "./mainnet";

export default createNetworkList({
  polygon,
  avalanche,
  mainnet,
});
