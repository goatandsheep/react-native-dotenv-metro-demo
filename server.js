const Metro = require('metro');

Metro.loadConfig()
    .then(config => {
        Metro.runServer(config, {});
    })
    