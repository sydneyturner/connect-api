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
      type: 'decimal(10,8)',
      // length: 20,
      notNull: true
    },

    lng: {
      type: 'decimal(10,8)',
      // length: 20,
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

// 'use strict';

// var dbm;
// var type;
// var seed;

// /**
//   * We receive the dbmigrate dependency from dbmigrate initially.
//   * This enables us to not have to rely on NODE_PATH.
//   */
// exports.setup = function (options, seedLink) {
//   dbm = options.dbmigrate;
//   type = dbm.dataType;
//   seed = seedLink;
// };

// exports.up = function (db, callback) {
//   db.insert('routes', ['id', 'lat', 'lng'], [1, -33.93052018, 18.41023695], callback);
// };

// exports.down = function (db, callback) {
//   //db.dropTable('routes', callback)
//   db.addIndex('routes', 'routes_id', 'id', function (err) {
//     if (err) { callback(err); return; }
//     db.removeIndex('routes', 'routes_id', callback);
//   });
// }

// // };

// exports._meta = {
//   "version": 1
// };
