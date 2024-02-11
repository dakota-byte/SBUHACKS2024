import random
from flask import Flask, jsonify, request
from flask_cors import CORS
import base64, urllib

app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "http://localhost:3000"}})

import pymongo
import json
from urllib.parse import quote_plus

# DO NOT TOUCH # # DO NOT TOUCH # # DO NOT TOUCH # # DO NOT TOUCH #
# DO NOT TOUCH # # DO NOT TOUCH # # DO NOT TOUCH # # DO NOT TOUCH #
db_user = "dakotalevermann"
db_pw = "qFnIQNwncOwAZAy3"
db_authstring = "cluster0.9dqrxbb.mongodb.net/?retryWrites=true&w=majority"
# Quote_plus config vars
username = quote_plus(db_user)
password = quote_plus(db_pw)
# Log into client
client = pymongo.MongoClient(f"mongodb+srv://{username}:{password}@{db_authstring}")
# use SolarRacing database
db = client.users
# use a collection named "DiscordBot"
UserData = db["users"]
# DO NOT TOUCH # # DO NOT TOUCH # # DO NOT TOUCH # # DO NOT TOUCH #
# DO NOT TOUCH # # DO NOT TOUCH # # DO NOT TOUCH # # DO NOT TOUCH #

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
  try: 
      result = UserData.find_one({"id":user_id})
      if not result:
         return {"error": "not found"}
      result["_id"] = "redacted"
      print(result)
      return jsonify(result)
  except pymongo.errors.OperationFailure:
      print("An authentication error was received. Are you sure your database user is authorized to perform write operations?")

@app.route('/add_user/<string:name>', methods=['POST'])
def add_entry(name):
    # Get the data from the POST request
    data = {
      "name": name,
      "type": "user",
      "id": random.randint(0, 99999999)
    }

    # Insert the data into MongoDB
    result = UserData.insert_one(data)

    # Return a response
    if result.inserted_id:
        return jsonify({'message': 'Entry added successfully', 'id': str(result.inserted_id)}), 201
    else:
        return jsonify({'message': 'Failed to add entry'}), 500

@app.route('/api/save-image', methods=['POST'])
def upload():
    image_data = request.json.get('imageData')
    if not image_data:
        return 'No image data provided', 400

    data = {
      "b64": image_data,
      "type": "image",
      "id": random.randint(0, 99999999)
    }

    # Insert the data into MongoDB
    result = UserData.insert_one(data)

    # Return a response
    if result.inserted_id:
        return jsonify({'message': 'Entry added successfully', 'id': str(result.inserted_id)}), 201
    else:
        return jsonify({'message': 'Failed to add entry'}), 500
    
@app.route('/api/image/<int:image_id>', methods=['GET'])
def get_user(image_id):
  try: 
      result = UserData.find_one({"id":image_id})
      if not result:
         return {"error": "not found"}
      result["_id"] = "redacted"
      print(result)
      return jsonify(result)
  except pymongo.errors.OperationFailure:
      print("An authentication error was received. Are you sure your database user is authorized to perform write operations?")

if __name__ == '__main__':
  app.run(debug=True, port=5000)

