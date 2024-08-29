from flask import Flask, request
import requests
from bs4 import BeautifulSoup
from openai import OpenAI
import os
from dotenv import load_dotenv

app = Flask(__name__)

def construct_email(client):
    user = OpenAI(
        api_key=  os.getenv('OPENAI_API_KEY')
    )

    content = scrape_url(client["website"]) if client["website"] else ""

    chat_completion = user.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": f"Construct an email to {client["name"]} with email: {client["email"]}. Here is the infomartion of the email {client["info"]} and some optional content to personalize the email: {content}",
        }
    ],
    model="gpt-3.5-turbo",
    )

    emailText = chat_completion.choices[0].message.content
    
    return emailText


def scrape_linkedin_url(url: str):
    response = requests.get(url=url)  # Gets raw HTML from url

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
        emailText = construct_email(client)
        emailList.append(
            {"id": client["id"], "email": emailText, "files": "FILES_FAKE"})

    return emailList


if __name__ == "__main__":
    load_dotenv()
    app.run(debug=True)
