export interface Validation<Args extends Array<unknown> = []> {
  validate(...args: Args): Error | null;
}
