import {IConnectionParams} from './params';
import {IQueryResult} from './result';
import {Connection, IPreparedStatement} from './connection';

/**
 * Pool Options.
 */
export interface IPoolOptions {
    /**
     * Maximum number of connections.
     */
    max?: number;

    /**
     * Number of milliseconds a connection remains idle
     * before it is closed and removed from the pool.
     */
    idleTimeout: number;
}

/**
 * Connection Pool.
 */
export class Pool {

    constructor(cn: IConnectionParams, options?: IPoolOptions) {

    }

    /**
     * Acquires the next available connection from the pool.
     */
    async connect(): Promise<Connection> {
        return new Connection({});
    }

    /**
     * Safe query execution;
     *
     * 1. Acquires next available connection from the pool;
     * 2. Executes the query;
     * 3. Releases connection back to the pool.
     */
    async query(sql: string, values?: any[]): Promise<IQueryResult[]> {
        return this.execute<IQueryResult[]>(c => c.query(sql, values));
    }

    /**
     * Safe prepared statement execution;
     */
    async prepare(ps: IPreparedStatement): Promise<IQueryResult> {
        return this.execute<IQueryResult>(c => c.prepare(ps));
    }

    /**
     * Safe generic-method execution;
     */
    protected async execute<R>(cb: (c: Connection) => Promise<R>): Promise<R> {
        const con = await this.connect();
        try {
            const result = await cb(con);
            con.release();
            return result;
        } catch (e) {
            con.release();
            throw e;
        }
    }
}
