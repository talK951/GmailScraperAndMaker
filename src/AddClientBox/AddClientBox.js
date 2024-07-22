import { useState } from 'react';
import './AddClientBox.css';
import axios from 'axios';

let idCount = 0;
export function AddClientBox(props) {
    const clientsList = props.clientsList;
    const setClientList = props.setClientList;
    const setEmailsGenerated = props.setEmailsGenerated;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [info, setInfo] = useState("");
    const [website, setWebsite] = useState("");

    const addClient = (name, email, info, website) => {
        setClientList(
            [
                ...clientsList,
                { id: idCount++, name: name, email: email, info: info, website: website} // and one new item at the end
            ]
        );
        setName("");
        setEmail("");
        setInfo("");
        setWebsite("");
    }

    const generateEmails = () => {
        axios.post('/flask-email-generator', {clientsList})
            .then(response => {
                // Handle response from Flask
                setEmailsGenerated(response.data);
            })
            .catch(error => {
                // Handle error
                console.error('Error:', error);
            });
    };

    return (
        <div className="box add-client-box">
            <div className="container">
                <div className="grid-item-1">
                    <div className="name">
                        <label htmlFor="website-text-area">Name: </label>
                        <textarea type="text" value={name} className="textbox" onChange={(evt) => { setName(evt.target.value)}}/>
                    </div>
                    <div className="email">
                        <label htmlFor="website-text-area">Email: </label>
                        <textarea type="text" value={email} className="textbox" onChange={(evt) => { setEmail(evt.target.value) }}/>
                    </div>
                </div>

                <div className="information">
                    <label htmlFor="info-text-area">Information:</label>
                    <textarea id="info-text-area" type="text" value={info} className="textbox" onChange={(evt) => { setInfo(evt.target.value) }}/>
                </div>

                <div className="website">
                    <label htmlFor="website-text-area">Website Link:</label>
                    <textarea id="website-text-area" type="text" value={website} className="textbox" onChange={(evt) => { setWebsite(evt.target.value) }}/>
                </div>

                <div className="button-div">
                    <button className="generate-emails-button "onClick={ () => generateEmails() }>Generate Emails</button>
                    <button className="add-content-button" type="button" onClick={() => addClient(name, email, info, website)}>Add Content</button>
                </div>
            </div>
        </div>
     );
}