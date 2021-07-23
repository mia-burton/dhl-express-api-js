export class DHLExpressError extends Error {
  constructor(code: number, message:string) {
    super()
    this.message = `Request failed with code: ${code}, message: ${message}`
  }
}