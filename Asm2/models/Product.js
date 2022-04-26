var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var mongoDB = 'mongodb://vietvt:vuviet202021@cluster0-shard-00-00.oahfw.mongodb.net:27017,cluster0-shard-00-01.oahfw.mongodb.net:27017,cluster0-shard-00-02.oahfw.mongodb.net:27017/test?replicaSet=atlas-cxgk4s-shard-0&ssl=true&authSource=admin'
    //var mongoDB = "mongodb://localhost:27017/NoSQLBoosterSamples"
    mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
    var db = mongoose.connection;
    
const ProductSchema = new Schema({
    name : {type : String, required : true},
    price : {type : Number},
    picURL : {type : String}
})
module.exports = mongoose.model('Product', ProductSchema);