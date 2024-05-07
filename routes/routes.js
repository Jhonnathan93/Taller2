const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');

router.get('/pokenea/Json', pokeneaController.getRandomPokeneaJson);
router.get('/pokenea/HTML', pokeneaController.getRandomPokeneaHtml);

module.exports = router;