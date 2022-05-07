const express = require('express');

const router = express.Router();

// /lab
router.get('/', (req, res, next) => {
  res.render('lab/lab.html');
});

// /lab/auth
router.get('/auth', (req, res, next) => {
  res.redirect('./auth/login');
})

// /lab/auth/logout
router.get('/auth/logout', (req, res, next) => {
  if (req.session.loggedIn !== undefined && !req.session.loggedIn) {
    console.log("로그인 되어 있지 않습니다.");

    return res.redirect('./auth/login');
  }

  req.session.loggedIn = false;
  console.log("로그아웃하였습니다.");

  req.session.save(() => {
    return res.redirect('./');
  });
});

// /lab/auth/login
router.get('/auth/login', (req, res, next) => {
  if (req.session.loggedIn !== undefined && req.session.loggedIn) {
    console.log("이미 로그인된 상태입니다.");

    return res.redirect('./');
  }

  let sessionId = req.session.userId;
  let sessionPassword = req.session.userPassword;

  return res.render('lab/auth/login.html', { userId: sessionId, userPassword: sessionPassword });
});

router.post('/auth/login', (req, res, next) => {
  let body = req.body;
  let session = req.session;

  if (session.userId === undefined) {
    console.log("회원정보가 없습니다.");
    
    return res.redirect('./auth/login');
  }

  if (body.login_id === session.userId &&
    body.login_pw === session.userPassword) {
    
    req.session.loggedIn = true;
    console.log("로그인하였습니다.");

    req.session.save(() => {
      return res.redirect('./');
    });
  }
  else {
    console.log("회원정보가 불일치합니다.");
  }
});

// /lab/auth/signup
router.get('/auth/signup', (req, res, next) => {
  if (req.session.loggedIn !== undefined && req.session.loggedIn) {
    console.log("이미 로그인된 상태입니다.");

    return res.redirect('./');
  }

  return res.render('lab/auth/signup.html');
});

router.post('/signup', (req, res, next) => {
  let body = req.body;

  if (body.signupPassword === body.signupRepassword) {
    req.session.userId = body.signupId;
    req.session.userPassword = body.signupPassword;
    console.log("회원가입하였습니다.");

    req.session.save(() => {
      return res.redirect('./auth/login');
    });
  }
  else {
    console.log("회원가입에 실패하였습니다.");
  }
});

module.exports = router;