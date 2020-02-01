import {IQueryResult} from './result';
import {IConnectionConfig} from './config';
import {PgDriver} from './driver';

export interface IPreparedStatement {
    name: string
    sql: string
    values: any[]
}

export interface IQueryOptions {

}

/**
 * Client-side connection options.
 */
export interface IConnectionOptions {

    /**
     * Number of milliseconds before timing out query with error.
     */
    queryTimeout?: number;
}

export class Connection {

    private driver: PgDriver;

    constructor(options?: IConnectionOptions) {
        this.driver = new PgDriver();
        this.driver.connect();
    }

    async connect(cn: IConnectionConfig | string): Promise<void> {

    }

    /**
     * Executes Sql.
     */
    async query(sql: string, values?: any[]): Promise<IQueryResult[]> {
        return [];
    }

    async prepare(ps: IPreparedStatement): Promise<IQueryResult> {
        return {command: '', fields: [], rows: []};
    }

    /**
     * Releases the connection:
     *
     * - physically, if it was created directly.
     * - back into the pool, if it came from one.
     */
    release() {

    }
}
