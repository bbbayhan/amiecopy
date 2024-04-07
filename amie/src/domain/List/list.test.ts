import { listJsonFixture } from "../../fixtures/list";
import { List } from "./list";
import { InvalidId, InvalidListName } from "../../shared/domain/exceptions";

describe('List', () => {
    it('should create List class', () => {
        const list = List.create(listJsonFixture);
        expect(list).toBeTruthy();
    });

    it('should throw an exception when list is created with empty id', () => {
        expect(() => List.create({ ...listJsonFixture, id: '' })).toThrow(InvalidId)
    })

    it('should throw an exception when list is created with empty name', () => {
        expect(() => List.create({ ...listJsonFixture, name: '' })).toThrow(InvalidListName)
    })
});