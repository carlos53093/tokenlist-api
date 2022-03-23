import { JsonController, Get } from "routing-controllers";
import ctokens from "../constants/ctokens";

@JsonController()
export class CTokensController {
  @Get("/compound/tokens", { transformResponse: false })
  public index() {
    return ctokens;
  }
}
