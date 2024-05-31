var express = require("express");
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});
router.get("/new", function (req, res, next) {
  res.render("form", { title: "Mini Message Board" });
});
router.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageAuthor,
    added: new Date(),
  });
  console.log(messages);
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;
