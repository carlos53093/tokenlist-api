import { JsonController, Get } from "routing-controllers";
import tokens from "../constants/atokensV3";

@JsonController()
export class ATokensV3Controller {
  @Get("/atokens-v3", { transformResponse: false })
  public index() {
    return tokens;
  }
}
