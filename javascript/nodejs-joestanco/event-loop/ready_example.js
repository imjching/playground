// wait for the delayed module to be ready
var delayedModule = require('./delayed_module'); // it needs time to load

// but the callback is registered after that...
delayedModule.on('ready', function() {
  console.log(delayedModule.message);
});

//delayedModule.emit('ready');