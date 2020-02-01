import {expect} from './';
import {Connection} from '../src';

describe('Connection', () => {
    it('can be created', () => {
        expect(new Connection()).to.be.instanceOf(Connection);
    });
});
