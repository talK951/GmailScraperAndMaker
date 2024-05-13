import React from 'react';
import { useState } from "react";
import './ClientTable.css';
import { Client } from '.././Utils/Client.js';


export function ClientTable() {
    const [clientsList, setClientList] = useState([ 
        new Client(1, "a", "a@gmail.com", "a"),
        new Client(2, "b", "b@gmail.com", "b"),
        new Client(3, "c", "c@gmail.com", "c"),
        new Client(4, "d", "d@gmail.com", "d"),
    ]);

    function removeClient(clientId) {
        setClientList(clientsList.filter(client => client.id !== clientId));
    }

    return (
        <>
            <table className='client-table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                {clientsList.map((row) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>
                            <div className='remove-button'>{row.info}</div>
                            <div className='remove-button'>
                                <button onClick={ () => removeClient(row.id) }>X</button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}