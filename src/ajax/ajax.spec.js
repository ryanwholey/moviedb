var sinon = require('sinon');
var ajax = require('./ajax')
var serverHelper = require('test/helpers/serverHelper');

describe('phantom', function() {
    beforeEach(function() {
        this.server = serverHelper.createFakeServer();
    });

    it('should', function() {
        expect(this.server).toBeDefined();
    });
});

describe('ajax tests', function() {

    beforeEach(function() {
        this.server = serverHelper.createFakeServer();
    });

    afterEach(function() {
        this.server.restore();
    });

    it('should receive a 200 response from the fake server', function(done) {
        this.server.respondWith200('[{ "id": 12, "comment": "Hey there" }]')
        ajax.getData();
        this.server.respond();

        setTimeout(function() {
            expect(ajax.data.length).toEqual(1);
            expect(ajax.data[0].comment).toEqual('Hey there');
            done();
        });
    });

    it('should receive a 400 response from the fake server', function(done) {
        let expected = 'ERROR fail fail fail';

        this.server.respondWith400(expected);
        ajax.getData();
        this.server.respond();

        setTimeout(function() {
            expect(ajax.error).toEqual(expected);
            done();
        });
    });
});