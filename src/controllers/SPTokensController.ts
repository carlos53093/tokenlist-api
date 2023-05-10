import { Get, JsonController, Param } from "routing-controllers";
import tokens from "../constants/atokensV3";

@JsonController()
export class SPTokensV3Controller {
  @Get("/spark/tokens", { transformResponse: false })
  public index() {
    return tokens;
  }

  @Get("/:network/spark/tokens", { transformResponse: false })
  public byNetwork(@Param("network") network: string) {
    return tokens[network] || [];
  }
}
