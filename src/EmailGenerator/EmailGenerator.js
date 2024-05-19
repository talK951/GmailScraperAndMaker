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
                // Handle response from Flask if needed
                setEmailsGenerated(response.data);
                console.log(response.data);
            })
            .catch(error => {
                // Handle error if needed
                console.error('Error:', error);
            });
    };

    function _generateEmail(id, name, email, info, instructions) {
        console.log(id);
        console.log(name);
        console.log(email);
        console.log(info);
        console.log(instructions);
        return "";
    }

    function generateEmails() {
        let emailList = [];
        let emailInstructions = document.getElementById("instructionsId").value;
        console.log(emailInstructions);
        for (let i = 0; i < clientsList.length; i++) {
            let emailText = _generateEmail(clientsList[i].id, clientsList[i].name, clientsList[i].email, clientsList[i].info, emailInstructions);
            emailList.push(new Email(clientsList[i].id, emailText, "FILES_FAKE"));
        }
        setEmailsGenerated(emailList);
    }

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