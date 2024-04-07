import { InvalidListName } from '../exceptions';
import { ValueObject } from './ValueObject';

export class ListName implements ValueObject<string> {
    private constructor(public value: string) { }

    static validate(value: string): boolean {
        return Boolean(value);
    }

    static create(key: string, value: string): ListName {
        if (!ListName.validate(value)) {
            throw new InvalidListName(key);
        }
        return new ListName(value);
    }
}
