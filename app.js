const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
//const requester = require('./requester')
var router = express.Router();
var path = __dirname + '/views/';
const mockobject = {
  suburb: "fake suburb",
  commute_time: 5,
  distance: 10
}
var flats = [ 
{ title: 'Glen Eden, 4 bedrooms, $170 pw',
flatID: 2274736112,
price: '$170 per week',
duration: 13,
picture:
 'https://trademe.tmcdn.co.nz/photoserver/tq/1119034461.jpg' },
{ title: 'Glen Eden, 3 bedrooms, $170 pw',
flatID: 2266610153,
price: '$170 per week',
duration: 13,
picture:
 'https://trademe.tmcdn.co.nz/photoserver/tq/1040940994.jpg' },
{ title: 'Glen Eden, 3 bedrooms, $99 pw',
flatID: 2278115347,
price: '$99 per week',
duration: 13,
picture:
 'https://trademe.tmcdn.co.nz/photoserver/tq/1021019836.jpg' },
{ title: 'Glen Eden, 5 bedrooms, $140 pw',
flatID: 2274324809,
price: '$140 per week',
duration: 13,
picture:
 'https://trademe.tmcdn.co.nz/photoserver/tq/938252271.jpg' },
{ title: 'Glen Eden, 3 bedrooms, $195 pw',
flatID: 2273118047,
price: '$195 per week',
duration: 13,
picture:
 'https://trademe.tmcdn.co.nz/photoserver/tq/1049183779.jpg' },
{ title: 'Glen Eden, 1 bedroom, $330 pw',
flatID: 2271423633,
price: '$330 per week',
duration: 13,
picture:
 'https://trademe.tmcdn.co.nz/photoserver/tq/1117141918.jpg' },
{ title: 'Glen Eden, 3 bedrooms, $180 pw',
flatID: 2271338181,
price: '$180 per week',
duration: 13,
picture:
 'https://trademe.tmcdn.co.nz/photoserver/tq/1020452922.jpg' },
{ title: 'Glen Eden, 3 bedrooms, $120 pw',
flatID: 2267471072,
price: '$120 per week',
duration: 13,
picture:
 'https://trademe.tmcdn.co.nz/photoserver/tq/992351222.jpg' },
{ title: 'Glen Eden, 4 bedrooms, $220 pw',
flatID: 2261314083,
price: '$220 per week',
duration: 13,
picture:
 'https://trademe.tmcdn.co.nz/photoserver/tq/1098246768.jpg' },
{ title: 'Glen Eden, 3 bedrooms, $230 pw',
flatID: 2257487037,
price: '$230 per week',
duration: 13,
picture:
 'https://trademe.tmcdn.co.nz/photoserver/tq/1107863699.jpg' },
{ title: 'Glen Eden, 3 bedrooms, $180 pw',
flatID: 2246182819,
price: '$180 per week',
duration: 13,
picture:
 'https://trademe.tmcdn.co.nz/photoserver/tq/1100866058.jpg' },
{ title: 'Glen Eden, 6+ bedrooms, $140 pw',
flatID: 2244113232,
price: '$140 per week',
duration: 13,
picture:
 'https://trademe.tmcdn.co.nz/photoserver/tq/618449694.jpg' },
{ title: 'Glen Eden, 2 bedrooms, $150 pw',
flatID: 2202177072,
price: '$150 per week',
duration: 13,
picture:
 'https://trademe.tmcdn.co.nz/photoserver/tq/1073596463.jpg' },
{ title: 'Glen Eden, 4 bedrooms, $180 pw',
flatID: 2044534216,
price: '$180 per week',
duration: 13,
picture:
 'https://trademe.tmcdn.co.nz/photoserver/tq/1027506432.jpg' },
{ title: 'Glen Eden, 6+ bedrooms, $300 pw',
flatID: 1657357318,
price: '$300 per week',
duration: 13,
picture:
 'https://trademe.tmcdn.co.nz/photoserver/tq/797236385.jpg' } ]
var suburbs = [
  { name: 'Auckland', duration: 7, numListings: 100 },
  { name: 'Hamilton', duration: 5, numListings: 70 },
  { name: 'Example 3', duration: 10, numListings: 30 },
  { name: 'Example 4', duration: 10, numListings: 30 },
  { name: 'Example 5', duration: 10, numListings: 30 }
];
var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";
var inputCommuteLocation, inputCommuteTime;
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));


app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

// console.log(suburb("auckland","morningside","University-Of-Auckland"))

router.use(function (req, res, next) {
  next();
});

router.get("/", function (req, res) {
  res.render(path + "index")
});

router.use('/search', function (req, res, next) {
  res.render(path + "search", {
    suburbs: suburbs,
    flats: flats,
    tagline: tagline,
    mockobject: mockobject,
    inputCommuteLocation: inputCommuteLocation,
    inputCommuteTime: inputCommuteTime
  });
  next()
})

router.post('/search', function (req, res) {
  var inputCommuteLocation = req.body.inputCommuteLocation,
  inputCommuteTime = req.body.inputCommuteTime;
})
router.post('/', function (req, res) {
  var inputCommuteLocation = req.body.inputCommuteLocation,
  inputCommuteTime = req.body.inputCommuteTime;
})

router.use('/listings', function (req, res) {
  res.render(path + "listings", {
    suburbs: suburbs,
  });
})

app.use("/", router);

app.use("*", function (req, res) {
  res.render(path + "404");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
