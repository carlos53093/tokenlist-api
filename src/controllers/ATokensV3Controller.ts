import { JsonController, Get, Param } from "routing-controllers";
import tokens from "../constants/atokensV3";

@JsonController()
export class ATokensV3Controller {
  @Get("/aave/v3/tokens", { transformResponse: false })
  public index() {
    return tokens;
  }

  @Get("/:network/aave/v3/tokens", { transformResponse: false })
  public byNetwork(@Param('network') network: string) {
    return tokens[network] || [];
  }
}
