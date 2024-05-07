const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');

router.get('/', pokeneaController.homePage);
router.get('/pokenea/Json', pokeneaController.showJsonPokenea);
router.get('/pokenea/HTML', pokeneaController.showHtmlPokenea);

module.exports = router;