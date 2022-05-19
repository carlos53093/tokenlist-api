import { Middleware, ExpressMiddlewareInterface } from "routing-controllers";

@Middleware({ type: "before" })
export class TrimStrings implements ExpressMiddlewareInterface {
  except = ["current_password", "password", "password_confirmation"];

  use(request: any, _response: any, next: (err?: any) => any) {
    if (request.query) {
      for (const queryKey of Object.keys(request.query)) {
        if (this.except.includes(queryKey)) continue;

        if (typeof request.query[queryKey] !== "string") continue;

        if (request.query[queryKey].trim() !== "") continue;

        request.query[queryKey] = null;
      }
    }

    next();
  }
}
