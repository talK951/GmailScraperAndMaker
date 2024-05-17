import React from 'react';
import './EmailTable.css';
import { useState } from "react";
import { Email } from '../Utils/Email';


export function EmailTable(props) {
    const emailList = props.emailsList;
    const setEmailList = props.setEmailsList;


    function removeEmail(emailId) {
        setEmailList(emailList.filter(email => email.id !== emailId));
    }

    return (
        <>
            <table className='email-table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>Files</th>
                    </tr>
                </thead>
                <tbody>
                {emailList.map((row) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.email}</td>
                        <td>
                            <div className='remove-button'>{row.files}</div>
                            <div className='remove-button'>
                                <button onClick={ () => removeEmail(row.id) }>X</button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}