import { Get, JsonController } from "routing-controllers";

@JsonController()
export class HomeController {
  @Get("/")
  public index() {
    return {
      message: "Token List API",
    };
  }
}
