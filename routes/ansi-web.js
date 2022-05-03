const express = require('express');
const router = express.Router();

// /ansi/web-study
router.get('/', (req, res, next) => {
  res.render('ansi/web-study.html');
});

// /ansi/web-study/hw-0415
router.get('/hw-0415', (req, res, next) => {
  res.render('ansi/web-study/hw-0415.html');
});

module.exports = router;