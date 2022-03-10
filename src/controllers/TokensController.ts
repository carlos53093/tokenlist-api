import { Post, JsonController, Body, Get } from "routing-controllers";
import tokens from "../constants/tokens";

@JsonController()
export class TokensController {
  @Get("/tokens", { transformResponse: false })
  public index() {
    return tokens;
  }
}
