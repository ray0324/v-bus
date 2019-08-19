export default class RespError extends Error {
  constructor(code: number, msg: string) {
    super(msg);

    Object.defineProperty(this, 'code', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: code,
    });

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RespError);
    }
  }
}
