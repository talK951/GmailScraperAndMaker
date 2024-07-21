import './EmailGenerator.css';
import axios from 'axios';


export function EmailGenerator(props) {
    const clientsList = props.clientsList;
    const setEmailsGenerated = props.setEmailsGenerated;

    const generateEmails = () => {
        let emailInstructions = document.getElementById("instructionsId").value;
        axios.post('/flask-email-generator', {clientsList,  text: emailInstructions})
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
            <button onClick={ () => generateEmails() }>Generate Emails</button>
        </>
    )
}