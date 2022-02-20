export class notFoundError extends Error {
  constructor(response) {
    super(response);
    this.name = "notFoundError";
  }
}
