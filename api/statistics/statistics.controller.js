const router = require('express').Router();
const statisticsServer = require('./statistics.server');


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next()
});

router.get('/', statisticsServer.getStatistics);
router.post('/', statisticsServer.postStatistics);

module.exports = router;