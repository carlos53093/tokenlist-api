import { Get, JsonController, Param } from "routing-controllers";
import cVaults from "../constants/cVaults";

@JsonController()
export class CTokensController {
  @Get("/compound/v3/vaults", { transformResponse: false })
  public index() {
    return cVaults;
  }
}
