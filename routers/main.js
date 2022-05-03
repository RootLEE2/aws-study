const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("main.html");
})

router.get('/ansi', (req, res, next) => {
  res.redirect('/ansi/web-study');
})

module.exports = router;