var $ = require('jquery');
var main = require('src/main.js');

module.exports = (function() {

    return {

        data: [],

        error: '',

        onSuccess(data) {
            this.data = data
        },

        onFail(err) {
            this.error = err.responseText;
        },

        getData() {
            $.get('http://localhost:8080/api/data')
                .then(this.onSuccess.bind(this))
                .fail(this.onFail.bind(this))
        }
    }
}());