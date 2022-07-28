import { Get, JsonController, Param } from "routing-controllers";
import tokens from "../constants/euler";

@JsonController()
export class ATokensV2Controller {
  @Get("/euler/tokens", { transformResponse: false })
  public index() {
    return tokens;
  }

  @Get("/:network/euler/tokens", { transformResponse: false })
  public byNetwork(@Param("network") network: string) {
    return tokens[network] || [];
  }
}
