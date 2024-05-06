const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');

router.get('/pokenea', pokeneaController.getPokenea);

module.exports = router;