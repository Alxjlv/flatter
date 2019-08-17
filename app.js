const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
var router = express.Router();
var path = __dirname + '/views/';

app.use(express.static(__dirname+'/public'));

router.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
  });
  
  router.get("/",function(req,res){
    res.sendFile(path + "index.html");
  });

  app.use("/",router);

  app.use("*",function(req,res){
    res.sendFile(path + "404.html");
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
