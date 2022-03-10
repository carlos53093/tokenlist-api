import { JsonController, Get } from "routing-controllers";
import ctokens from "../constants/ctokens";

@JsonController()
export class CTokensController {
  @Get("/ctokens", { transformResponse: false })
  public index() {
    return ctokens;
  }
}
