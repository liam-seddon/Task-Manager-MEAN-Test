const express = require('express');
const app =express();
const bodyParser = require('body-parser');
const { mongoose } = require('./database/mongo');

//Mongoose Models
const { List, Task } = require('./database/models');

//Middleware
app.use(bodyParser.json());


//to get lists from database
app.get('/lists', (req, res) => {
  List.find({}).then(lists) =>{
    res.send(lists;)

  };

})

//to create lists to database
app.post('/lists', (req, res) => {
  let title = req.body.title;

  let newList = new List({
    title
  });
  newList.save().then(listDoc) => {
    res.send(listDoc)
  })

});

//to update lists in the database
app.patch('/lists/:id', (req, res) => {

})
//to delete lists in the database
app.delete('/lists/:id', (req, res) => {

})


app.listen(3000, () =>{
  console.log("server is connected and listening!");
})
