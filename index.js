const express = require('express');
const index = express();
const port = 3000;

index.get('/', function(req, res){
  res.send("Hi there, welcome to my assignment!");
});

index.get('/speak/:animal', function(req, res){
  var animal = req.params.animal;
  if(animal === "pig"){
    res.send("The " + animal + " says 'Oink'");
  } else if (animal === "cow"){
    res.send("The " + animal + " says 'Mooo'");
  } else if(animal === "dog"){
    res.send("The " + animal + " says 'Woof Woof!'");
  } else{
    res.send("I like " + animal)
  }
});

index.get('/repeat/:word/:number', function(req, res){
  var repeatedWord = req.params.word;
  var repeatedTimes = req.params.number;
  console.log(req.params.word + " " + req.params.number);
  console.log(repeatedWord + " " + repeatedTimes);  
  var holder = [];
  console.log(holder + " before");
  for(var a = 0; a < repeatedTimes; a++){
    holder.push(repeatedWord);
  }
  console.log(holder + " after");
  var regex = /,/gi;
  var finished = holder.toString().replace(regex, " ");
  res.send(finished);
});


index.get('*', function(req, res){
  res.send("yeah this is imbarasing but this aint what you're looking for!")
});

index.listen(port, function(){
  console.log("app listening on port " + port);
})