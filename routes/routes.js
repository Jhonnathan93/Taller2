const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');

router.get('/pokenea/Json', pokeneaController.getPokeneaAleatorioJson);
router.get('/pokenea/View', pokeneaController.getPokeneaAleatorioHTML);
router.get('/pokenea/HTML', pokeneaController.getPokeneaAleatorioHTML);

module.exports = router;