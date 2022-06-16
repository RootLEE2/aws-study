const express = require('express');

const router = express.Router();

// /inpyeon
router.get('/', (req, res, next) => {
  res.redirect('./inpyeon/please');
});

// /inpyeon/please
router.get('/please', (req, res, next) => {
  res.render('inpyeon/inpyeon-info.html');
});

// /inpyeon/the-camp
router.get('/the-camp', (req, res, next) => {
  res.render('inpyeon/the-camp.html');
});

module.exports = router;