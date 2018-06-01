var express = require('express');
var router = express.Router();

//Import API's
var registersList = require('./registers');
var consultation = require('./consultation');
var analysis = require('./analysis');
var selfObservation = require('./selfObservation');
var image = require('./image');
var account = require('./account');
var user = require('./user');
var testApi = require('./test');
//Use API's

router.use("/registers", registersList);
router.use('/consultation', consultation);
router.use('/analysis', analysis);
router.use('/selfObservation', selfObservation);
router.use('/image', image);
router.use('/account', account);
router.use('/user', user);
router.use('/test', testApi);
module.exports = router;