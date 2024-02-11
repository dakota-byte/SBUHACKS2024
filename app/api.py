from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
  # Simulate getting user data from a database (replace with your actual logic)
  user_data = {
    'id': user_id,
    'name': f'kyle',
    'size': f'60 million nanometers'
  }
  return jsonify(user_data)

if __name__ == '__main__':
  app.run(debug=True, port=3000)