import {connect, Socket} from 'net';
import {IConnectionConfig} from "./config";

/**
 * Encapsulates all low-level communications,
 * to keep the rest of the library code clean.
 *
 * This interface is internal to the library.
 */
export class PgDriver {

    private socket?: Socket;

    constructor() {
        // this.socket = undefined;
    }

    connect(cn: IConnectionConfig) {
        if (this.socket) {
            throw new Error('Already connected!');
        }

        let s;
        if (cn.hosts) {
            const h = cn.hosts[0];
            const n: string = h.name || '';
            const p = h.port || 5432;
            if (h.type === 'socket') {
                s = connect(n);
            } else {
                s = connect(p, n);
            }

            s.once('connect', this.onConnect.bind(this));
            s.once('error', this.onError.bind(this));
            s.once('close', this.onClose.bind(this));
            s.once('data', this.onData.bind(this));

            this.socket = s;
        }
    }

    disconnect() {
        // this.socket = null;
    }

    onConnect() {
        // this.socket && this.socket.write(Buffer.from('0000000804d2162f', 'hex'));

        console.log('onConnect');

        setTimeout(() => {
            if (this.socket) {
                this.socket.end();
            }
        }, 1000);
    }

    onData(data: any) {
        console.log('onData');
    }

    onError(e: any) {
        console.log('onError', e);
    }

    onClose() {
        console.log('onClose');
    }
}
