const router = require('express').Router();
const exercisesServer = require('./exercises.server');


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time for exercises: ', Date.now());
    next();
});

router.get('/', exercisesServer.getExercises);
router.post('/', exercisesServer.uploadExercise);
router.get('/:userId', exercisesServer.getUserLastExercise);

module.exports = router;