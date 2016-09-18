var main = require('./main');

describe('test block' , function() {

    it('should be true', function() {
        let b = {b:2, ...main};
        expect(b.a).toEqual(1);
    });
});

describe('async block', function() {

    it('should wait for async', function(done) {
        let flag = false;

        setTimeout(() => {
            flag = true;
            expect(flag).toEqual(true);
            done();
        }, 300);

        expect(flag).toEqual(false);
    });
});
