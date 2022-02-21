export class NotFoundError extends Error {
  constructor(response) {
    super(response);
    this.name = "NotFoundError";
  }
}
