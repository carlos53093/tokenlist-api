import { createNetworkList } from "../../utils";
import mainnet from "./mainnet";
import polygon from "./polygon";

export default createNetworkList({
  mainnet,
  polygon,
});
