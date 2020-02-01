/**
 * Host Configuration.
 */
export interface IHost {
    name?: string
    port?: number
    type?: string
}

/**
 * Connection Configuration Interface.
 */
export interface IConnectionConfig {
    hosts?: IHost[]
    database?: string
    user?: string
    password?: string
}

export interface IConnectionDefaults {

}
