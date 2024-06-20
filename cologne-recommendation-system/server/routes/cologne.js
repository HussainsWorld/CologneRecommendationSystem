const express = require('express');
const router = express.Router();
const cologneController = require('../controllers/cologneController');

router.get('/search', cologneController.searchCologne);
router.get('/recommendations', cologneController.getRecommendations);

module.exports = router;
