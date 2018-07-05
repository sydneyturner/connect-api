'use strict';

var dbm;
var type;
var seed;

exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, done) {
  db.createTable('routes', {
    id: {
      type: 'int',
      primaryKey: 'true',
      autoIncrement: 'true',
      notNull: true
    },

    lat: {
      type: 'decimal',
      length: 20,
      notNull: true
    },

    lng: {
      type: 'decimal',
      length: 20,
      notNull: true
    },


  }, done);
};

exports.down = function (db, done) {
  db.dropTable('routes', done)
};

exports._meta = {
  "version": 1
};
