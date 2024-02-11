// mongo.js
const MongoClient = require('mongodb').MongoClient;

const MONGO_URI = 'mongodb+srv://dakotalevermann:qFnIQNwncOwAZAy3@cluster0.9dqrxbb.mongodb.net/?retryWrites=true&w=majority'; // Replace with your connection string

let client;

module.exports = {
  async connect() {
    if (!client) {
      client = await MongoClient.connect(MONGO_URI);
    }
    return client.db();
  },
  async close() {
    if (client) {
      await client.close();
    }
  },
};
