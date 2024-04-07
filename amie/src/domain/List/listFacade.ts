import { List } from "./list";

export abstract class ListFacade {
    abstract addList(list: List): Promise<void>;
    abstract getLists(): Promise<List[]>;
}