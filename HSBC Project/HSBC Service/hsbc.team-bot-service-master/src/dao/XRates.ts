'use strict';
var mongoose = require('mongoose');

var FxRatesSchema = mongoose.Schema({
    name: String,
    code: String,
    buy: Number,
    sell: Number
});

var FxRates = mongoose.model('fxrates', FxRatesSchema);

function findAllSupportedCurrencies() {
    return FxRates.find({},{_id: 0, buy: 0, sell: 0}, function (err, rates) {
        if (err) return console.error(err);
    }).exec();
};

function findAllFxRates() {
    return FxRates.find({},{_id: 0}, function (err, rates) {
        if (err) return console.error(err);
    }).exec();
};

function findFxRateByCode(code) {
    return FxRates.findOne({code: code.toUpperCase()} ,function (err) {
        if (err) return console.error(err);
    }).exec();
}

module.exports = {
    findAllSupportedCurrencies: findAllSupportedCurrencies,
    findFxRateByCode: findFxRateByCode,
    findAllFxRates: findAllFxRates
}

