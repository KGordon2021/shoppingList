let express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const shoppingListRoute = require('./routes/shoppingListRoute');
const categoriesRoute = require('./routes/categoriesRoute')

//mongoose and mongo DB database connection
mongoose.connect('mongodb://127.0.0.1:27017/shoppingList')
.then((x) => {
   console.log(`Connected to MongoDB Successfully! Database name: "${x
    .connections[0].name}"`)
   })
   .catch((err) => {
     console.error('Error connecting to mongodb', err.reason)
  })

  //express App
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(cors());

  //setting Route middleware
  app.use('/api', shoppingListRoute);
  app.use('/category', categoriesRoute);

  //setting up default port
  const port = process.env.PORT || 3000;
  const server = app.listen(port , () => console.log (`Listening on port ${port}...`));


