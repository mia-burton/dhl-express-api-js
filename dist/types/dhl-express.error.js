"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DHLExpressError = void 0;
class DHLExpressError extends Error {
    constructor(code, message) {
        super();
        this.message = `Request failed with code: ${code}, message: ${message}`;
    }
}
exports.DHLExpressError = DHLExpressError;
