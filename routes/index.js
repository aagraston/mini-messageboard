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

router.post('/new', (req, res, next) => {

  let messageText =  req.body.message
  let userName = req.body.username

  messages.push({text: messageText, user: userName, added: new Date()})
  res.redirect('/');
})

module.exports = router;
