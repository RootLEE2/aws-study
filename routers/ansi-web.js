const express = require('express');
const router = express.Router();

// /ansi-web
router.get('/', (req, res, next) => {
  res.render('ansi/web-study.html');
});

module.exports = router;