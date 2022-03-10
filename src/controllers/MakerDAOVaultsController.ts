import { Post, JsonController, Body, Get } from "routing-controllers";
import vaults from "../constants/makerdao-vaults";

@JsonController()
export class MakerDAOVaultsController {
  @Get("/makerdao/vaults", { transformResponse: false })
  public index() {
    return vaults;
  }
}
