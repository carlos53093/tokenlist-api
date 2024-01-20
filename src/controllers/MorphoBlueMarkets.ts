import { Get, JsonController, Param } from "routing-controllers";
import morphoBlueMarkets from "../constants/morphoblue-markets";

@JsonController()
export class MorphoController {
  @Get("/morphoblue/markets", { transformResponse: false })
  public index() {
    return morphoBlueMarkets;
  }

  @Get("/:network/morphoblue/markets", { transformResponse: false })
  public byNetwork(@Param("network") network: string) {
    return morphoBlueMarkets[network] || [];
  }
}
