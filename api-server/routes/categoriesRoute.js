let express = require('express');
// const products = require('../models/categoryLists');
const app = express();

//Requiring Monsgoose Model
let categoryList = require('../models/categories');
let categoryListRoute = express.Router();


// Get All category
categoryListRoute.route('/getCategory').get((req, res) => {
  categoryList.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// categoryListRoute.route('/').get = async(req, res) => {
//   try {
//    const List =  await categoryList.find();
//     res.status(200).json ({
//      status: 'success',
//      results: List.length,
//        data: {
//          List
//        }
//      })
//     } catch(error) {
//        res.status(404).json({
//          status: 'fail',
//          message: err
//        })
//      }
//    }



//create category List
categoryListRoute.route('/addCategory').post((req, res) => {
  categoryList.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// //find by Id
categoryListRoute.route('/findSelectedCategory/:id').get((req, res) => {
  categoryList.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// // //update by id

categoryListRoute.route('/updateCatById/:id').put((req, res) => {
  categoryList.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// // //delete by id

categoryListRoute.route('/removeCat/:id').delete((req, res) => {
  categoryList.findByIdAndRemove(req.params.id, ( error, data) => {
    if (error) {
      return next(error)
    }else {
      res.json(data)
    }
  })
})

module.exports = categoryListRoute;
