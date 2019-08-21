const mongoose = require('mongoose');
const express = require('express');
const app = express();

let cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const logger = require('morgan');
const api = require('./client/src/apis/apis');



const API_PORT = 5000 || process.env.PORT;

const router = express.Router();

// Thhis is our MongoDB Database

const dbRoute = 'mongodb+srv://brad123:brad123@devconnector-cfb3y.mongodb.net/test?retryWrites=true&w=majority';

// mongoose.conect(dbRoute, { useNewUrlParser: true });
// Connect Database
// connectDB();
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use('/api', api);


// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

// append /api for our http requests
app.use('/api', router);

  const connectDB = async () => {
    try {
      await mongoose.connect(db, {
       useNewUrlParser: true,
       useCreateIndex: true,
       useFindAndModify: false
      });

      console.log('MongoDB Connected...');
    } catch(err) {
      console.log(err.message)
      process.exit(1);
    }
  }
  // this is our get method
  // this method fetches all available data in our database
  router.get('/getData', (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

module.exports = routers;
