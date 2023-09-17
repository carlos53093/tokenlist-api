import { Get, JsonController, Param } from "routing-controllers";
import crvMarkets from "../constants/crvMarkets";

@JsonController()
export class CurveMarketsController {
  @Get("/crvusd/markets", { transformResponse: false })
  public index() {
    return crvMarkets;
  }

  @Get("/:network/crvusd/markets", { transformResponse: false })
  public byNetwork(@Param("network") network: string) {
    return crvMarkets[network] || [];
  }
}
