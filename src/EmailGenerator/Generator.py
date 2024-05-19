from flask import Flask, request, jsonify
import json
app = Flask(__name__)


@app.route('/flask-route', methods=['POST'])
def receive_data():
    data = request.json  # Get JSON data from the request
    lst=[1,2,3]
    emailList = []

    for client in data["clientsList"]:
        emailList.append({"id": client["id"], "email": data["text"], "files": "FILES_FAKE"})
    
    # Process the data as needed
    # k = json.loads(data)
    # print(data["clientsList"])
    # Optionally, return a response to the client
    return emailList

if __name__ == "__main__":
    # print("hhhyoyoyo\n")

    app.run(debug=True)

# import sys

# argv = sys.argv
# filename, id, name, email, info, instructions = argv
# text = instructions[:]
# text = text.replace("{name}", name)
# text = text.replace("{email}", email)
# text = text.replace("{info}", info)
# print([id, text])
