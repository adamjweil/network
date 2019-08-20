const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

mongoose.Promise = global.Promise;

moongoose.connect(db, { useNewUrlParser: true });

let dbRoute = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

db.on('error', console.error.bind(console, "MongoDB connection error"));
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

module.exports = connectDB;
