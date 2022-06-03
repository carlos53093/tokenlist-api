import { ValidationError } from 'class-validator'
import type { ExpressErrorMiddlewareInterface } from 'routing-controllers'
import { HttpError, Middleware } from 'routing-controllers'

@Middleware({ type: 'after' })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
  error(error: any, request: any, response: any) {
    if (error instanceof CustomValidationError) {
      return response.status(422).json({
        message: error.message,
        errors: error.errors,
      })
    }

    if (
      'errors' in error
      && Array.isArray(error.errors)
      && error.errors.every(element => element instanceof ValidationError)
    ) {
      response.status(422).json({
        message: 'The given data was invalid',
        errors: error.errors.reduce((acc, curr) => {
          if (curr.constraints)
            return { ...acc, [curr.property]: Object.values(curr.constraints) }

          let errors = []

          try {
            errors = curr.children.flatMap((child) => {
              const property = `${curr.property}.${child.property}`

              if (child.constraints) {
                return Object.values(child.constraints).map(
                  constraint => `${property}.${constraint}`,
                )
              }

              return child.children.flatMap((child2) => {
                if (child2.constraints) {
                  return Object.values(child2.constraints).map(
                    constraint => `${property}.${constraint}`,
                  )
                }

                return []
              })
            })
          }
          catch (error) {
            errors = ['Invalid value']
          }

          return {
            ...acc,
            [curr.property]: errors,
          }
        }, {}),
      })
    }
    else if (error instanceof HttpError) {
      return response.status(error.httpCode).send(error.message)
    }
    else {
      return response.status(400).send({
        error: error.message,
      })

      // next(error);
    }
  }
}
export class CustomValidationError extends Error {
  errors: any

  constructor(errors: { [key: string]: string[] }) {
    super('The given data was invalid')
    this.errors = errors // can be used for internal logging
  }
}
