var express     = require('express');
var router      = express.Router();
const userRoute    = require('./user/userRoute');
const mealRecordsRoute    = require('./mealRecords/mealRecordsRoute');

//========================== Export Module Start ==========================

//API version 1
router.use('/user', userRoute);
router.use('/mealRecords', mealRecordsRoute);
module.exports = router;
//========================== Export Module End ============================
