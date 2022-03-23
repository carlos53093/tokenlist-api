import { JsonController, Get } from "routing-controllers";
import tokens from "../constants/atokensV2";

@JsonController()
export class ATokensV2Controller {
  @Get("/aave/v2/tokens", { transformResponse: false })
  public index() {
    return tokens;
  }
}
