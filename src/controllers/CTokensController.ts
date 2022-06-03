import { Get, JsonController, Param } from 'routing-controllers'
import ctokens from '../constants/ctokens'

@JsonController()
export class CTokensController {
  @Get('/compound/tokens', { transformResponse: false })
  public index() {
    return ctokens
  }

  @Get('/:network/compound/tokens', { transformResponse: false })
  public byNetwork(@Param('network') network: string) {
    return ctokens[network] || []
  }
}
