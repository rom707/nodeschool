let duplexer = require('duplexer2');
let through = require('through2');

module.exports = function (counter) {
    let countries = {};        

    let duplex = duplexer(through.obj(function (obj, encoding, next) {
        if (obj.country in countries) {
            countries[obj.country]++;
        } else {
            countries[obj.country] = 1;  
        }
        next();
    }), counter);

    duplex.on("finish", function() {
        counter.setCounts(countries);
    });

    return duplex;
};