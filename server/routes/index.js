var express = require('express');
var router = express.Router();

var puppies = [{name:'Rover', age:'1'},{name:'Jampy', age:'2'},{name:'Clampf', age:'3'}];


router.get('/', function(req, res, next) {
  res.render('index');
});

/// all the puppies
///
router.get('/puppies', function(req, res, next) {
  res.json(puppies);
});

/// create a PUPPY
///
router.post('/puppies', function(req, res, next) {
  puppies.push({name:req.body.name, age:req.body.age});
  console.log(req.body);
  res.json(puppies);
});

/// show me 1 PUPPY
///
router.get('/puppies/:id', function(req, res, next){
  //http POST localhost:3000 name='The Cheat'  age=3
  // console.log(req.params);
  console.log(req.params);
  res.json(puppies[req.params.id  -1]);
});

///change a puppy's info
///http PUT http://localhost:3000/puppies/2 name=bob age=1
router.put('/puppies/:id', function(req, res, next){
puppies[req.params.id -1].name = req.body.name;
puppies[req.params.id -1].age = req.body.age;
res.json(puppies[req.params.id -1]);
});

router.delete('/puppies/:id', function(req, res, next){
  //http DELETE localhost:3000/puppies/3
  //delete the selected puppy and the position in the array
  puppies.splice([req.params.id -1],1);
  res.json(puppies[req.params.id -1]);

//delete the puppy leaving an empty array
// puppies[req.params.id -1].name = req.body.name;
// puppies[req.params.id -1].age = req.body.age;
// res.json(puppies[req.params.id -1]);
});



module.exports = router;
