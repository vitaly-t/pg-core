export interface IHost {
    name?: string;
    port?: number;
}

/**
 * Connection Parameters.
 */
export interface IConnectionParams {
    hosts?: IHost[];
    database?: string;
    user?: string;
    password?: string;
}
