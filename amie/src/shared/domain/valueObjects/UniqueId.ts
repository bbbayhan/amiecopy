import { InvalidId } from '../exceptions';
import { ValueObject } from './ValueObject';

export class UniqueId implements ValueObject<string> {
    private constructor(public value: string) { }

    static validate(value: string): boolean {
        return Boolean(value);
    }

    static create(key: string, value: string): UniqueId {
        if (!UniqueId.validate(value)) {
            throw new InvalidId(key);
        }
        return new UniqueId(value);
    }
}
