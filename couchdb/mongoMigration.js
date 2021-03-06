require('babel-core/register')({
  "presets": ["es2015", "react"],
  "retainLines": "true",
  "plugins": [
    "transform-class-properties",
    "add-module-exports",
    ['module-resolver', {
      alias: {
        app: '../app/react',
        shared: '../app/shared',
        api: '../app/api'
      }
    }]
  ]
});

var dbConfig = require('../app/api/config/database');
var mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect(dbConfig.development);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  mongoose.connection.db.dropDatabase(() => {
    require('./couch2mongo.js');
  });
});
