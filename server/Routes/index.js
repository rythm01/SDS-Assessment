const router = require('express').Router();
const customerRoute = require('./Customer');

router.use('/customer',customerRoute);

module.exports = router