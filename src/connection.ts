import {IQueryResult} from './result';

export interface IQueryOptions {

}

export class Connection {
    /**
     * Executes Query.
     */
    async query(query: string, values?: any[], options?: IQueryOptions): Promise<IQueryResult> {
        return {};
    }

    /**
     * Releases connection back to the pool.
     */
    release() {

    }
}
