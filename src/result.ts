export interface IField {
    name: string
    oid: number
    typeId: number
}

/**
 * Query Result.
 */
export interface IQueryResult {
    command: string
    fields: IField[]
    rows: any[]
}
