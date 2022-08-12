const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let list = new Schema ({
  item: {
    type: String
  }
  // desciption: {
  //   type: String
  // },
  // quantity: {
  //   type: Number
  // }
}, {
  collection: 'listItems'
})
module.exports = mongoose.model('list', list)
