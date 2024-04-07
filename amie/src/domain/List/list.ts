import { ListName } from "../../shared/domain/valueObjects/ListName";
import { UniqueId } from "../../shared/domain/valueObjects/UniqueId";

export class List {
    private constructor(public readonly id: UniqueId, public readonly name: ListName) { }

    static create({ id, name }: { [key: string]: any }): List {
        return new List(UniqueId.create('id', id), ListName.create('name', name));
    }
}
