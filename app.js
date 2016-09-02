/**
 * Created by xzy on 16-9-2.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');

var MangoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/mission';
var _db;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('dist'));

MangoClient.connect(mongoUrl,function (err,db) {
  if(err){
    console.error(err);
    return;
  }
  console.log("connecting to the database");
  _db = db;
  app.listen(8888,function () {
    console.log("running");
  });
});
