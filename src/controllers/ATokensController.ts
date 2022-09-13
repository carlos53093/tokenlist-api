import { Get, JsonController, Param } from "routing-controllers";
import tokens from "../constants/atokens";

@JsonController()
export class ATokensController {
  @Get("/aave/tokens", { transformResponse: false })
  public index() {
    return tokens;
  }

  @Get("/:network/aave/tokens", { transformResponse: false })
  public byNetwork(@Param("network") network: string) {
    return tokens[network] || [];
  }
}
