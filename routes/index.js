const express = require('express');
const router = express.Router();
const formatDistance = require('date-fns/formatDistance')

const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
  },
  {
    text: "Don't mind me, just learning Express !",
    user: 'Mike Hunt',
    added: new Date(),
  },
  {
    text: "This is cool !",
    user: 'Ben Dover',
    added: new Date(),
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
		title: 'Mini Message Board',
		messages: messages,
		format: formatDistance,
  })
});

router.post('/new', (req, res, next) => {
  const newMsg = {
    text: req.body.msgText,
    user: req.body.msgAuthor,
    added: new Date()
  }

  messages.push(newMsg)

  res.redirect('/')
})

module.exports = router;
