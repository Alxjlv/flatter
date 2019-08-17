const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const requester = require('./requester')
var router = express.Router();
var path = __dirname + '/views/';
const mockobject = {
  suburb: "fake suburb",
  commute_time: 5,
  distance: 10
}
var drinks = [
  { name: 'Bloody Mary', drunkness: 3 },
  { name: 'Martini', drunkness: 5 },
  { name: 'Scotch', drunkness: 10 }
];
var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

// console.log(suburb("auckland","morningside","University-Of-Auckland"))

router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});

router.get("/", function (req, res) {
  res.render(path + "index", {
    drinks: drinks,
    tagline: tagline,
    mockobject: mockobject
  })
});


app.use("/", router);

app.use("*", function (req, res) {
  res.render(path + "404");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
