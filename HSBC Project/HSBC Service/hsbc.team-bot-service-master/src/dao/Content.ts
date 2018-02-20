'use strict';
var mongoose = require('mongoose');

var ContentSchema = mongoose.Schema({
    key: String,
    simpleResponse : String,
    speech : String,
    text : String,
    title : String,
    subtitle : String,
    imageURL : String,
    suggestions : [String],
    buttonTitle : [String],
    buttonURL : [String]
});

var Content = mongoose.model('contents', ContentSchema);

function findContent(key) {
    return Content.findOne({key: key},{_id: 0}, function (err, content) {
        if (err) {
            console.log(err);
            return console.error(err);
        }
    }).exec();
};

module.exports = {
    findContent: findContent
}