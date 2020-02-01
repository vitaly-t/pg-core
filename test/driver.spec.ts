import {expect} from './';
import {PgDriver} from '../src/driver';

describe('Driver', () => {
    it('can be created', () => {
        expect(new PgDriver()).to.be.instanceOf(PgDriver);
    });
});
