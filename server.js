const config = require('./config');
const buildApiRoutes = require('./api');
const express = require('express');
const logger = require('./logger');

const app = express();
app.use(express.json());

function start() {
    buildApiRoutes(app).then(() => {
        app.listen(config.SERVER_PORT);
        logger.info('Magic happens on port ' + config.SERVER_PORT);
    });
}

module.exports = {
    start
};