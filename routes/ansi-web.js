const express = require('express');
const session = require('express-session');
const router = express.Router();

// /ansi/web-study
router.get('/', (req, res, next) => {
  res.render('ansi/web-study.html');
});

// /ansi/web-study/hw-0415
router.get('/hw-0415', (req, res, next) => {
  res.render('ansi/web-study/hw-0415.html');
});

// /ansi/web-study/hw-0429
router.get('/hw-0429', (req, res, next) => {
  const session = req.session;

  res.render('ansi/web-study/hw-0429.html', { justText: session.justText });
});

router.post('/hw-0429', (req, res, next) => {
  const { just_text } = req.body;

  req.session.justText = just_text;

  req.session.save(() => {
    res.redirect('./hw-0429');
  });
})

module.exports = router;