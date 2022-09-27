var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});
/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});
/* GET home page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'project' });
});
/* GET home page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'services' });
});
/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'home' });
});
module.exports = router;
