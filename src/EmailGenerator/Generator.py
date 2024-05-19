from flask import Flask, request, jsonify
import json
app = Flask(__name__)


def edit_email_text(emailText, client):
    emailText = emailText.replace("{name}", client["name"])
    emailText = emailText.replace("{info}", client["info"])
    emailText = emailText.replace("{info}", client["email"])

    return emailText

@app.route('/flask-route', methods=['POST'])
def receive_data():
    data = request.json  # Get JSON data from the request
    emailList = []

    for client in data["clientsList"]:
        emailText = data["text"]
        emailText = edit_email_text(emailText, client)
        emailList.append({"id": client["id"], "email": emailText, "files": "FILES_FAKE"})
    
    return emailList

if __name__ == "__main__":
    app.run(debug=True)
