'use strict';

const Server = require('./web/Server');

if (require.main === module) {
  new Server()
    .start()
    .catch(rejection => {
      console.error('Unhandled server error', rejection);
      process.exit(1);
    });
}
