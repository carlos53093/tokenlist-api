import { ValidationError } from "class-validator";
import {
  Middleware,
  ExpressErrorMiddlewareInterface,
} from "routing-controllers";

@Middleware({ type: "after" })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
  error(error: any, request: any, response: any, next: (err: any) => any) {
    if (
      "errors" in error &&
      Array.isArray(error.errors) &&
      error.errors.every((element) => element instanceof ValidationError)
    ) {
      response.status(422).json({
        message: "The given data was invalid",
        errors: error.errors.reduce((acc, curr) => {
          return { ...acc, [curr.property]: Object.values(curr.constraints) };
        }, {}),
      });
    } else {
      next(error);
    }
  }
}
