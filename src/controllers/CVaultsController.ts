import { Get, JsonController, Param } from "routing-controllers";
import cVaults from "../constants/cVaults";

@JsonController()
export class CTokensController {
  @Get("/compound/vaults", { transformResponse: false })
  public index() {
    return cVaults;
  }
}
