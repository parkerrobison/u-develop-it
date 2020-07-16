//this will act as a central hub for all of the other apiRoutes.
const express = require('express');
const { route } = require('./candidateRoutes');
const router = express.Router();

router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));

module.exports = router;