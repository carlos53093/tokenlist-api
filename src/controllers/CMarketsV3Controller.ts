import { Get, JsonController, Param } from "routing-controllers";
import cVaults from "../constants/cMarketsV3";

@JsonController()
export class CTokensController {
  @Get("/compound/v3/markets", { transformResponse: false })
  public index() {
    return cVaults;
  }
  @Get("/:network/compound/v3/markets", { transformResponse: false })
  public byNetwork(@Param("network") network: string) {
    return cVaults[network] || [];
  }
}
