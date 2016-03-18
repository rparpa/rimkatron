import expect from 'expect';
import { generate } from '../js/sentence_generators/ShouldWeTake';

describe('ShouldWeTake', () => {
    describe('generate', () => {
        it('Should generate a string', () => {
            expect(generate()).toBeA('string');
        });
        it('Should not generate the same string twice', () => {
            expect(generate()).toNotEqual(generate());
        });
    });
});
