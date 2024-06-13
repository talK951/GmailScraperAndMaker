from flask import Flask, request, jsonify
import json
app = Flask(__name__)
from redmail import gmail

def edit_email_text(emailText, client):
    emailText = emailText.replace("{name}", client["name"])
    emailText = emailText.replace("{info}", client["info"])
    emailText = emailText.replace("{email}", client["email"])

    return emailText

@app.route('/flask-email-generator', methods=['POST'])
def receive_data():
    data = request.json  # Get JSON data from the request
    emailList = []

    for client in data["clientsList"]:
        emailText = data["text"]
        emailText = edit_email_text(emailText, client)
        emailList.append({"id": client["id"], "email": emailText, "files": "FILES_FAKE"})
    
    return emailList

@app.route('/send-email', methods=['POST'])
def send_email():
    gmail.username = "kohyunmcleod@gmail.com"
    gmail.password = "psil vnye abop yihm"
    gmail.send(
        subject="An example email",
        receivers=["kohyunmcleod@gmail.com"],
        text="Hi, this is text body.",
        html="<h1>Hi, this is HTML body.</h1>"
    )

    return []

if __name__ == "__main__":
    app.run(debug=True)
