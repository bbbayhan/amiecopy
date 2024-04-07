export abstract class DomainException extends Error {
    protected constructor(error: string) {
        super(`***DOMAIN ERROR***: ${error}`);
        console.error(`***DOMAIN ERROR***: ${error}`);
    }
}

export class InvalidId extends DomainException {
    constructor(property: string) {
        super(`Invalid id for: ${property}`);
    }
}

export class InvalidListName extends DomainException {
    constructor(property: string) {
        super(`Invalid list name for: ${property}`);
    }
}
