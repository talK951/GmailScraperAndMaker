import { useState } from 'react';
import './AddClientBox.css';

let idCount = 0;
export function AddClientBox(props) {
    const clientsList = props.clientsList;
    const setClientList = props.setClientList;

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

    return (
        <div className="box">
            <div className="container">
                <div className="grid-item-1">
                    <div>Name: <input type="text" value={name} className="textbox" onChange={(evt) => { setName(evt.target.value)}}/></div>
                    <div>Email: <input type="text" value={email} className="textbox" onChange={(evt) => { setEmail(evt.target.value) }}/></div>
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
                    <button type="button">Upload Files</button>
                    <button type="button" onClick={() => addClient(name, email, info, website)}>Add Content</button>
                </div>
            </div>
        </div>
     );
}