var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Bank_data = require('./api/models/BankModel'), //created model loading here
  bodyParser = require('body-parser');
 
var paginate = require('express-paginate');
app.use(paginate.middleware(10, 50));
 
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://vercel-admin-user:caPGuP9qGdgelBup@cluster0.zi4ufft.mongodb.net/?retryWrites=true&w=majority')
 .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/BankRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('API Server Started On: ' + port);
