'use strict';

var dbm;
var type;
var seed;

exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};



exports.up = function (db, callback) {

  db.createTable('routes', {
    id: {
      type: 'int',
      primaryKey: 'true',
      autoIncrement: 'true',
      notNull: true
    },

    routeName: {
      type: 'string',
      length: 100,
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
    }
  }, callback);
  // inserting the coordinates for town route
  // function updateRoutes1(err) {
  //   if (err) { callback(err); return; }
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [1, "town-route", -33.93052018, 18.41023695]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [2, "town-route", -33.92995045, 18.40929952]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [3, "town-route", -33.92994823, 18.4090313]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [4, "town-route", -33.93011291, 18.40875235]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [5, "town-route", -33.92994248, 18.40830744]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [6, "town-route", -33.92983308, 18.40808683]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [7, "town-route", -33.92972626, 18.4079098]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [8, "town-route", -33.92942609, 18.40798759]),

  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [9, "town-route", -33.92915998, 18.40812438]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [10, "town-route", -33.9286008, 18.40867628]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [11, "town-route", -33.92761041, 18.40965598]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [12, "town-route", -33.92691008, 18.4103808]),

  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [13, "town-route", -33.92674232, 18.41072177]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [14, "town-route", -33.92573215, 18.4117837]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [15, "town-route", -33.92627969, 18.4125682]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [16, "town-route", -33.92464502, 18.41433429]),

  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [17, "town-route", -33.9232169, 18.41592221]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [18, "town-route", -33.92253139, 18.41652416]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [19, "town-route", -33.92182437, 18.41735937]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [20, "town-route", -33.91950962, 18.41983773]),

  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [21, "town-route", -33.92051757, 18.42125419]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [22, "town-route", -33.92147462, 18.42022355]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [23, "town-route", -33.92501008, 18.41632792]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [24, "town-route", -33.92573452, 18.41556041]),

  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [25, "town-route", -33.92668018, 18.41449289]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [26, "town-route", -33.92694939, 18.41416844]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [27, "town-route", -33.92705177, 18.41377684]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [28, "town-route", -33.92717863, 18.4135864]),

  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [29, "town-route", -33.92770624, 18.41303612]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [30, "town-route", -33.92923019, 18.41145712]),
  //     db.insert.bind('routes', ['id', 'routeName', 'lat', 'lng'], [31, "town-route", -33.93050637, 18.41025155]), callback);
  // }

};

exports.down = function (db, callback) {
  db.dropTable('routes', callback)
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
