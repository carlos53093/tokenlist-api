import { Get, JsonController, Param } from "routing-controllers";
import morphoMarkets from "../constants/morpho-v3-markets";

@JsonController()
export class MorphoV3Controller {
  @Get("/morpho/aave/v3/markets", { transformResponse: false })
  public index() {
    return morphoMarkets;
  }

  @Get("/:network/morpho/aave/v3/markets", { transformResponse: false })
  public byNetwork(@Param("network") network: string) {
    return morphoMarkets[network] || [];
  }
}
