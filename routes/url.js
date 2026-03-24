const express = require("express");
const { handleGenerateNewShortURL, 
    handleGetAnalytics, handleRedirect } = require("../controllers/url");
const router = express.Router();

router
.post('/url', handleGenerateNewShortURL);

router
.get('/url/analytics/:shortId', handleGetAnalytics);

router
.get('/:shortId', handleRedirect);

module.exports = router;
