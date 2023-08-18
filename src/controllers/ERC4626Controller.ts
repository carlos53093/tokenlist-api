import { Get, JsonController, Param } from "routing-controllers";
import tokens from "../constants/atokens";

@JsonController()
export class ERC4626Controller {
  @Get("/erc4626/tokens", { transformResponse: false })
  public index() {
    return tokens;
  }

  @Get("/:network/erc4626/tokens", { transformResponse: false })
  public byNetwork(@Param("network") network: string) {
    return tokens[network] || [];
  }
}
