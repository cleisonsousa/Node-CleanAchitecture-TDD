import { MissingParamError } from '../../erros'
import { Validation } from './validation'

export class RequiredFieldValidation implements Validation {
  private readonly fiedlName: string
  constructor (fieldName: string) {
    this.fiedlName = fieldName
  }

  validate (input: any): Error {
    if (!input[this.fiedlName]) {
      return new MissingParamError(input[this.fiedlName])
    }
  }
}
