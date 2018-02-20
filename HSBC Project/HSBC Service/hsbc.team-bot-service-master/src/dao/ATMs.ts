import mongoose = require('mongoose');
import { Schema } from "mongoose";

const ATMSchema: Schema = new Schema({
    address: String,
    city: String,
    lat: Number,
    long: Number
});

let atms = mongoose.model('atms', ATMSchema);

function findAllAtms() {
    var promise = atms.find({}, {_id:0}, function (err, atms) {
        if (err) return console.error(err);
    }).exec();

    return promise;
}

module.exports = {
    findAllAtms: findAllAtms
}



