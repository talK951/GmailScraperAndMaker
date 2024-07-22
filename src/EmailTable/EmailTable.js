import React from 'react';
import './EmailTable.css';
import { useState } from "react";
import { Email } from '../Utils/Email';
import axios from 'axios';


export function EmailTable(props) {
    const emailList = props.emailsList;
    const setEmailList = props.setEmailsList;


    function removeEmail(emailId) {
        setEmailList(emailList.filter(email => email.id !== emailId));
    }

    function sendEmail() {
        let emailPwd = prompt("enter ur pwd")
        axios.post('/send-email', {emailPwd: emailPwd})
        .then(response => {
            // Handle response from Flask
            console.log(response.data)
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
        });
    }

    return (
        <div className='box email-table-box'>
            <table className='email-table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {emailList.map((row) => (
                    <tr key={row.id}>
                        <td className='id'>{row.id}</td>
                        <td>{row.email}</td>
                        <td>
                            <div className='emialtable-button-div'>
                                <button className = "x-button" onClick={ () => removeEmail(row.id) }>X</button>
                                <button className = "send-email" onClick={ () => sendEmail() }>Send</button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    )
}