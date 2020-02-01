import {connect, Socket} from 'net';

/**
 * Encapsulates all low-level communications,
 * to keep the rest of the library code clean.
 *
 * This interface is internal to the library.
 */
export class PgDriver {

    private socket: Socket|undefined;

    constructor() {
        // this.socket = undefined;
    }

    connect() {
        if (this.socket) {
            throw new Error('Already connected!');
        }

        this.socket = connect(5432, 'localhost');

        this.socket.once('connect', this.onConnect.bind(this));
        this.socket.once('error', this.onError.bind(this));
        this.socket.once('close', this.onClose.bind(this));
        this.socket.once('data', this.onData.bind(this));
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

const a = new PgDriver();

a.connect();

