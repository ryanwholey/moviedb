import main from './main'

describe('test block' , () => {
    it('should be true', () => {
        let b = {b:2, ...main};
        expect(b.b).toEqual(2);
    });
});