import React from 'react';
import './ClientTable.css';


export function ClientTable(props) {
    const clientsList = props.clientsList;
    const setClientList = props.setClientList;


    function removeClient(clientId) {
        setClientList(clientsList.filter(client => client.id !== clientId));
    }

    return (
        <div className = "box">
            <table className='client-table'>
                <thead>
                    <tr>
                        <th className='id'>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Info</th>
                        <th>Website</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                {clientsList.map((row) => (
                    <tr key={row.id}>
                        <td className='id'>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.info}</td>
                        <td>{row.website}</td>
                        <td><button className = "x-button" onClick={ () => removeClient(row.id) }></button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    )
}