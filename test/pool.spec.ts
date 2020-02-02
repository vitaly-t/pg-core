import {expect} from './';
import {Pool} from '../src';

describe('Pool', () => {
    it('can be created', () => {
        expect(new Pool('')).to.be.instanceOf(Pool);
    });
});
