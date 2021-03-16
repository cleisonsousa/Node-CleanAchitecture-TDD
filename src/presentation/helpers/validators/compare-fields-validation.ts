import { InvalidParamError } from '../../erros'
import { Validation } from './validation'

export class CompareFieldValidation implements Validation {
  private readonly fiedlName: string
  private readonly fieldToCompareName: string
  constructor (fieldName: string, fieldToCompareName: string) {
    this.fiedlName = fieldName
    this.fieldToCompareName = fieldToCompareName
  }

  validate (input: any): Error {
    if (input[this.fiedlName] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldToCompareName)
    }
  }
}
