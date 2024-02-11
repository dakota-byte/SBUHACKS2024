// mongo.js
const MongoClient = require('mongodb').MongoClient;

const MONGO_URI = 'mongodb+srv://dakotalevermann:qFnIQNwncOwAZAy3@cluster0.9dqrxbb.mongodb.net/?retryWrites=true&w=majority'; // Replace with your connection string

async function connectToDb() {
  const client = await MongoClient.connect(MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true});
  const db = client.db('Cluster0');
  return db;
}

module.exports = connectToDb;

