const application = require('@loopback/dist-util').loadDist(__dirname);

module.exports = application;

if (require.main === module) {
  // Run the application
  application.main().catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}

// let app = require('express')();
// let http = require('http').Server(app);
// let io = require('socket.io')(http);

// io.on('connection', (socket) => {

//   socket.on('disconnect', function () {
//     io.emit('users-changed', { user: socket.nickname, event: 'left' });
//   });

//   // socket.on('driver-loc', (driver) => {
//   //   socket.driver = driver;
//   //   io.emit('new driver', { user: driver, event: 'joined' });
//   // });

//   socket.on('sendLocation', (data) => {
//     // user: driver
//     io.emit('sendToEveryone', { data });
//   });


// });

// var port = process.env.PORT || 3001;

// http.listen(port, function () {
//   console.log('listening in http://localhost:' + port);
// });

