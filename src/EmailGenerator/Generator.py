from flask import Flask, request
import requests 
from bs4 import BeautifulSoup 
import json
app = Flask(__name__)


def construct_email(emailText, client):
    emailText = emailText.replace("{name}", client["name"])
    emailText = emailText.replace("{info}", client["info"])
    emailText = emailText.replace("{email}", client["email"])
    content = scrape_url(client["website"])
    emailText = emailText.replace("{content}", content)
    print(emailText)
    return emailText

def scrape_url(url: str):
    response = requests.get(url=url) # Gets raw HTML from url

    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        
        all_text = soup.get_text(separator=' ')
        
        return all_text
    else:
        return f"Failed to retrieve content, status code: {response.status_code}"


@app.route('/flask-email-generator', methods=['POST'])
def receive_data():
    data = request.json  # Get JSON data from the request
    emailList = []

    for client in data["clientsList"]:
        emailText = data["text"]
        emailText = construct_email(emailText, client)
        emailList.append({"id": client["id"], "email": emailText, "files": "FILES_FAKE"})
    
    return emailList

if __name__ == "__main__":
    app.run(debug=True)
