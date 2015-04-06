var mongoose     = require('mongoose'),
    Schema       = mongoose.Schema;

var AppLogSchema   = new Schema({
    name: String,
    date : { type: Date, default: Date.now },
    appName: String,
    level : String,
    logger : String,
    message : String,
    info : String,
    exception : String
});

module.exports = mongoose.model('AppLog', LogSchema);
