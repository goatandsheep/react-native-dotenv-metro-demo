const Metro = require('metro');

Metro.loadConfig()
    .then(config => {
        Metro.runBuild(config, {
            entry: './src/index.js',
            out: './dist/index.js',
        });
    })
    .catch(error => {
        console.error(error);
    });

    