import main from './main'

describe('test block' , () => {
    it('should be true', () => {
        let b = {b:2, ...main};
        expect(b.b).toEqual(2);
    });
});

describe('async block', () => {

    it('should wait for async', (done) => {
        let flag = false;

        setTimeout(() => {
            flag = true;
            expect(flag).toEqual(true);
            done();
        },300);

        expect(flag).toEqual(false);
    });
});