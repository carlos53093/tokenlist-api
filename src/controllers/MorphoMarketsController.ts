import { Get, JsonController, Param } from "routing-controllers";
import morphoMarkets from "../constants/morpho-markets";


@JsonController()
export class MorphoController {
  @Get("/morpho/markets", { transformResponse: false })
  public index() {
    return morphoMarkets;
  }
}
