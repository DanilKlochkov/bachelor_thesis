class MaxSolutionError extends Error {
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, MaxSolutionError.prototype);
    }

    getMessage() {
        return this.message;
    }
}