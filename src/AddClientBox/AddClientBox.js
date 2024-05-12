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
    }

    return (
        <div className="box">
            <div className="container">
                <div className="grid-item-1">
                    <div>Name: <input type="text" className="textbox" onChange={(evt) => { setName(evt.target.value) }}/></div>
                    <div>Email: <input type="text" className="textbox" onChange={(evt) => { setEmail(evt.target.value) }}/></div>
                </div>

                <div className="information">
                    Information: <input type="text" className="textbox" onChange={(evt) => { setInfo(evt.target.value) }}/>
                </div>

                {/* print clients */}
                {/* {clients.map((item) =>(
                    <ul>
                        <li>{item.id}</li>
                        <li>{item.name}</li>
                        <li>{item.email}</li>
                        <li>{item.info}</li>
                    </ul>
                ))
                } */}


                <div className="button-div">
                    <button type="button">Upload Files</button>
                    <button type="button" onClick={() => addClient(name, email, info)}>Add Content</button>
                </div>
            </div>
        </div>
     );
}
 
export default AddClientBox;