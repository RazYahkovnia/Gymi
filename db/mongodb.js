const MongoClient = require('mongodb').MongoClient;
const logger = require('../logger');
const config = require('../config');

let db;

async function startConnection() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(config.MONGO_URL, function(err, client) {
            if (err) {
                reject(err);
            }

            logger.info("Connected successfully to Mongo Database");

            db = client.db(config.MONGO_DB_NAME);

            resolve(db);
        });
    });
}

function getDB() {
    return db;
}

module.exports = {
    startConnection,
    getDB
};

