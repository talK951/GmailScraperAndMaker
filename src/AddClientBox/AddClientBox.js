import { useState } from 'react';
import './AddClientBox.css';

let idCount = 0;
const AddClientBox = () => {
    const [clients, setClients] = useState([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [info, setInfo] = useState("");

    const addClient = (name, email, info) => {
        setClients(
            [
                ...clients,
                { id: idCount++, name: name, email: email, info: info} // and one new item at the end
            ]
        );
        setName("");
        setEmail("");
        setInfo("");
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

                <div className="button-div">
                    <button type="button">Upload Files</button>
                    <button type="button" onClick={() => addClient(name, email, info)}>Add Content</button>
                </div>
            </div>
        </div>
     );
}
 
export default AddClientBox;