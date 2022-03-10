import { JsonController, Get } from "routing-controllers";
import tokens from "../constants/atokensV2";

@JsonController()
export class ATokensV2Controller {
  @Get("/atokens-v2", { transformResponse: false })
  public index() {
    return tokens;
  }
}
