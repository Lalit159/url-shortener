const express = require('express')
const {GenerateNewShortURL, getAnalytics} = require('../controllers/url')

const router = express.Router()

router.post('/', GenerateNewShortURL)

router.get('/analytics/:shortId', getAnalytics)

module.exports = router