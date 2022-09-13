import { Get, JsonController, Param } from "routing-controllers";
import tokens from "../constants/etokens";

@JsonController()
export class ETokensV2Controller {
  @Get("/euler/tokens", { transformResponse: false })
  public index() {
    return tokens;
  }

  @Get("/:network/euler/tokens", { transformResponse: false })
  public byNetwork(@Param("network") network: string) {
    return tokens[network] || [];
  }
}
