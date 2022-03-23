import { Post, JsonController, Body, Get, Param } from "routing-controllers";
import tokens from "../constants/tokens";

@JsonController()
export class TokensController {
  @Get("/tokens", { transformResponse: false })
  public index() {
    return tokens;
  }

  @Get("/:network/tokens", { transformResponse: false })
  public byNetwork(@Param('network') network: string) {
    return tokens[network] || [];
  }
}
