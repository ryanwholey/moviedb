const sinon = require('sinon');

module.exports = (function() {

    function createFakeServer() {
        return decorateServer(sinon.fakeServer.create());
    };

    function decorateServer(server) {
        server.respondWith200 = function(data) {
            validateInput(data);
            this.respondWith([200, {'Content-Type': 'application/json'}, data]);
        };

        server.respondWith400 = function(data) {
            validateInput(data);
            this.respondWith([400, {'Content-Type': 'application/json'}, data]);
        };

        return server;
    };

    function validateInput(input) {
        if (typeof input !== 'string') {
            throw new Error('String must be passed to fakeServer.respondWith200');
        }
    }

    return {
        createFakeServer
    };

}());
