let express = require('express');
// const products = require('../models/shoppingListItemss');
const app = express();

//Requiring Monsgoose Model
let shoppingListItems = require('../models/shoppingListItems');
let shoppingListRoute = express.Router();


//mongoose Function
// create()
// findById()
// findByIdAndUpdate()
// findOneAndRemove()


// Get All students
shoppingListRoute.route('/').get((req, res) => {
  shoppingListItems.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


//create shoppingListItems
shoppingListRoute.route('/add').post((req, res) => {
  shoppingListItems.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


//find by Id
shoppingListRoute.route('/findSelectedItem/:id').get((req, res) => {
  shoppingListItems.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// //update by id

shoppingListRoute.route('/updateById/:id').put((req, res) => {
  shoppingListItems.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// //delete by id

shoppingListRoute.route('/remove/:id').delete((req, res) => {
  shoppingListItems.findByIdAndRemove(req.params.id, ( error, data) => {
    if (error) {
      return next(error)
    }else {
      res.json(data)
    }
  })
})
module.exports = shoppingListRoute;
