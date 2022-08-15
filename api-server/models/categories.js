const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let category = new Schema ({
  categories: {
    type: String
  }
  // desciption: {
  //   type: String
  // },
  // quantity: {
  //   type: Number
  // }
}, {
  collection: 'categories'
})
module.exports = mongoose.model('category', category)
