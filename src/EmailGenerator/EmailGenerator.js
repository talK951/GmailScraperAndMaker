import './EmailGenerator.css';
import axios from 'axios';
import { Email } from '../Utils/Email.js';


export function EmailGenerator(props) {
    const clientsList = props.clientsList;
    const setEmailsGenerated = props.setEmailsGenerated;

    const sendDataToFlask = () => {
        let emailInstructions = document.getElementById("instructionsId").value;
        axios.post('/flask-route', { clientsList,  text: emailInstructions})
            .then(response => {
                // Handle response from Flask
                setEmailsGenerated(response.data);
                console.log(response.data);
            })
            .catch(error => {
                // Handle error
                console.error('Error:', error);
            });
    };

    return (
        <>
            <table className='email-generator'>
                <thead>
                    <tr>
                        <th>Provide email format or instructions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <textarea id="instructionsId" name="freeform" rows="12" cols="100">
                            Enter text here...
                            </textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={ () => sendDataToFlask() }>Generate Emails</button>
        </>
    )
}