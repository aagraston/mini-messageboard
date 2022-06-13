var express = require('express');
var router = express.Router();

const messages = [
{
  text: 'Hey everyone!',
  user: 'mango',
  added: new Date()
},
{
  text: 'Lo\' and behold',
  user: 'armada',
  added: new Date()
},
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini-Message-Board', messages: messages });
});

module.exports = router;
