import {IConnectionConfig} from './config';
import {ConnectionString} from 'connection-string';

export function prepareConfig(cn: IConnectionConfig | string): IConnectionConfig {
    let res: IConnectionConfig;
    if (typeof cn === 'string') {
        const cs = new ConnectionString(cn);
        res = {
            hosts: cs.hosts,
            database: cs.path && cs.path[0],

        };
    } else {
        res = Object.assign({}, cn);
    }

    // set defaults here...

    return res;
}
