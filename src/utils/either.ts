export type Either<S, F> = Success<S, F> | Failure<S, F>;

export class Success<S, F> {
  constructor(readonly value: S) {}

  isSuccess(): this is Success<S, F> {
    return true;
  }

  isFailure(): this is Failure<S, F> {
    return false;
  }
}

export class Failure<S, F> {
  constructor(readonly value: F) {}

  isSuccess(): this is Success<S, F> {
    return false;
  }

  isFailure(): this is Failure<S, F> {
    return true;
  }
}

export function sendSuccess<S, F>(value: S): Either<S, F> {
  return new Success<S, F>(value);
}

export function sendFailure<S, F>(value: F): Either<S, F> {
  return new Failure<S, F>(value);
}
