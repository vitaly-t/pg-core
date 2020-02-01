import {IConnectionParams} from "./params";

type AcquireOptions = {
    /**
     * Acquire a detached connection, which won't be returned
     */
    detach: boolean
};

/**
 * Pool Options.
 */
export interface IPoolOptions {
    /**
     * Maximum number of connections.
     */
    max?: number;
}

/**
 * Connection Pool.
 */
export class Pool {

    constructor(options?: IPoolOptions) {

    }

    /**
     * Creates a direct physical/unmanageable connection.
     */
    connect(cn: IConnectionParams) {

    }

    /**
     * Acquires next available connection from the pool.
     */
    acquire(options: AcquireOptions) {

    }

}
