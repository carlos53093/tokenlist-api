import { Get, JsonController, Param } from "routing-controllers";
import vaults from "../constants/makerdao-vaults";

@JsonController()
export class MakerDAOVaultsController {
  @Get("/makerdao/vaults", { transformResponse: false })
  public index() {
    return vaults;
  }

  @Get("/:network/makerdao/vaults", { transformResponse: false })
  public byNetwork(@Param("network") network: string) {
    return vaults[network] || [];
  }
}
