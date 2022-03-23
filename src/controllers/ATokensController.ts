import { JsonController, Get } from "routing-controllers";
import tokens from "../constants/atokens";

@JsonController()
export class ATokensController {
  @Get("/aave/tokens", { transformResponse: false })
  public index() {
    return tokens;
  }
}
