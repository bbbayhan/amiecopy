import { List } from '../domain/List/list';
import { ListFacade } from '../domain/List/listFacade';

export class ListHttp implements ListFacade {
    async addList(list: List): Promise<void> {

    }

    async getLists(): Promise<List[]> {
        const lists = [List.create({ id: '1', name: 'beste' })]
        return lists;
    }

}
