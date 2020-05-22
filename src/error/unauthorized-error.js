import { HttpError } from './http-error';

export class UnauthorizedError extends HttpError {
    constructor(message) {
        super(401, message);
    }
}
