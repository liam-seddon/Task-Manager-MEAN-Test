const express = require('express');
const app =express();

//Mongoose Models
const {List} = require('.databse/models/list.model');


//to get lists from database
app.get('/lists', (req, res) => {

})

//to create lists to database
app.get('/lists', (req, res) => {

})

//to update lists in the database
app.patch('/lists/:id', (req, res) => {

})
//to delete lists in the database
app.delete('/lists/:id', (req, res) => {

})


app.listen(3000, () =>{
  console.log("server is connected and listening!");
})
