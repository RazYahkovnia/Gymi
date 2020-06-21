const fs = require('fs');
const logger = require('../logger');

async function getFiles(dirname) {
    return new Promise((resolve, reject) => {
        fs.readdir(dirname, function(err, fileNames) {
            if (err) {
                return reject(err);
            }
            resolve(fileNames);
        });
    });
}

async function loadAPIs(appServer) {
    const directories = await getFiles(__dirname);
    directories.forEach(function(dir) {
        if (dir != "index.js") {
            logger.info(`Routing /${dir} api with ./${dir}/${dir}.controller`);
            const controller = require(`./${dir}/${dir}.controller`);
            appServer.use(`/${dir}`, controller);
        }
    });
}

module.exports = loadAPIs;