const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
//const requester = require('./requester')
var router = express.Router();
var path = __dirname + '/views/';

var flats = [
  {
    title: 'Mount Eden, 3 bedrooms',
    flatID: 2306613563,
    price: 200,
    duration: 10,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1140197059.jpg'
  },

  {
    title: 'Grafton, 2 bedrooms',
    flatID: 2304489664,
    price: 270,
    duration: 10,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1125805280.jpg'
  },
  {
    title: 'City Centre, 2 bedrooms',
    flatID: 2306717397,
    price: 305,
    duration: 10,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1140294249.jpg'
  },
  {
    title: 'Parnell, 3 bedrooms',
    flatID: 2306007589,
    price: 395,
    duration: 10,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1139679089.jpg'
  },
  {
    title: 'Eden Terrace, 6+ bedrooms',
    flatID: 2299985342,
    price: 330,
    duration: 11,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1097278786.jpg'
  },
  {
    title: 'Newmarket, 6+ bedrooms',
    flatID: 2296088857,
    price: 265,
    duration: 15,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1132167354.jpg'
  },
  {
    title: 'Kingsland, 4 bedrooms',
    flatID: 2302643506,
    price: 180,
    duration: 16,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1070585799.jpg'
  },
  {
    title: 'Sandringham, 4 bedrooms',
    flatID: 2306899918,
    price: 175,
    duration: 21,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1140617552.jpg'
  },
  {
    title: 'Sandringham, 3 bedrooms',
    flatID: 2306155409,
    price: 220,
    duration: 21,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1139785902.jpg'
  },
  {
    title: 'Freemans Bay, 4 bedrooms',
    flatID: 2306875064,
    price: 220,
    duration: 21,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1140611343.jpg'
  },
  {
    title: 'Morningside, 3 bedrooms',
    flatID: 2298595679,
    price: 265,
    duration: 21,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1134659942.jpg'
  },
  // {
  //   title: 'Epsom, 3 bedrooms',
  //   flatID: 2306152002,
  //   price: 250,
  //   duration: 23,
  //   picture:
  //     'https://www.trademe.co.nz/images/property/listing/flatmates-placeholder.png'
  // },
  {
    title: 'Epsom, 3 bedrooms',
    flatID: 2306307893,
    price: 295,
    duration: 23,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1139874736.jpg'
  },
  {
    title: 'Grey Lynn, 3 bedrooms',
    flatID: 2306717413,
    price: 325,
    duration: 23,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1140322311.jpg'
  },
  {
    title: 'Grey Lynn, 1 bedroom',
    flatID: 2306613155,
    price: 360,
    duration: 23,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1140196842.jpg'
  },
  {
    title: 'Mount Albert, 3 bedrooms',
    flatID: 2304398362,
    price: 271,
    duration: 26,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1138526214.jpg'
  },
  {
    title: 'Mount Roskill, 2 bedrooms',
    flatID: 2306787195,
    price: 170,
    duration: 27,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1140438019.jpg'
  },
  {
    title: 'Ellerslie, 3 bedrooms',
    flatID: 2305482514,
    price: 200,
    duration: 27,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1130474435.jpg'
  },
  {
    title: 'Ponsonby, 4 bedrooms',
    flatID: 2302712135,
    price: 300,
    duration: 27,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1137334296.jpg'
  },
  {
    title: 'Westmere, 6+ bedrooms',
    flatID: 2305949432,
    price: 200,
    duration: 28,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1139633765.jpg'
  },
  {
    title: 'Hillsborough, 2 bedrooms',
    flatID: 2303805120,
    price: 116,
    duration: 32,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1093841669.jpg'
  },
  {
    title: 'Point Chevalier, 3 bedrooms',
    flatID: 2301608043,
    price: 260,
    duration: 33,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1110190816.jpg'
  },
  {
    title: 'Mission Bay, 5 bedrooms',
    flatID: 2304279386,
    price: 285,
    duration: 33,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1138421056.jpg'
  },
  {
    title: 'Waterview, 2 bedrooms',
    flatID: 2304356504,
    price: 175,
    duration: 34,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1138482234.jpg'
  },
  {
    title: 'Panmure, 3 bedrooms',
    flatID: 2301554493,
    price: 190,
    duration: 38,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1123090212.jpg'
  },
  {
    title: 'Mount Wellington, 4 bedrooms',
    flatID: 2303983194,
    price: 150,
    duration: 45,
    picture:
      'https://trademe.tmcdn.co.nz/photoserver/plus/1138174797.jpg'
  }]

var inputCommuteLocation, inputCommuteTime;
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

router.use(function (req, res, next) {
  next();
});

router.get("/", function (req, res) {
  res.render(path + "index")
});

router.use('/search', function (req, res, next) {
  res.render(path + "search", {
    flats: flats,
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

app.use("/", router);

app.use("*", function (req, res) {
  res.render(path + "404");
});

app.listen(port, () => console.log(`App listening on port ${port}!`))
