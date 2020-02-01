import {expect} from './';
import {Test} from "../src";

describe('dummy test', () => {
    it('must succeed', () => {
        expect(new Test()).to.be.instanceOf(Test);
    });
});
