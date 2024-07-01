var express = require('express');
var router = express.Router();
const { sendMail } = require("../utils/mail")
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/send-mail", (req, res, next) => {
  sendMail(req,res);
  res.send("mail send")
})

module.exports = router;
