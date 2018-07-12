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
  db.createTable('stops', {
    id: {
      type: 'int',
      primaryKey: 'true',
      autoIncrement: 'true',
      notNull: true
    },

    route: {
      type: 'string',
      length: 100,
      notNull: true
    },

    name: {
      type: 'string',
      notNull: true
    },

    lat: {
      type: 'decimal(10,8)',
      // length: 20,
      notNull: true
    },

    lng: {
      type: 'decimal(10,8)',
      // length: 20,
      notNull: true
    },

    address: {
      type: 'string',
      length: 100,
      notNull: true
    }

  }, done);
};

exports.down = function (db, done) {
  db.dropTable('stops', done)
};

exports._meta = {
  "version": 1
};
