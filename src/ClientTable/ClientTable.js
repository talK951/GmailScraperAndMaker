import React from 'react';
import './ClientTable.css';


export function ClientTable(props) {
    const clientsList = props.clientsList;
    const setClientList = props.setClientList;


    function removeClient(clientId) {
        setClientList(clientsList.filter(client => client.id !== clientId));
    }

    return (
        <div>
            <table className='client-table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Info</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                {clientsList.map((row) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.info}</td>
                        <td>
                            <div className='remove-button'>{row.website}</div>
                            <div className='remove-button'>
                                <button onClick={ () => removeClient(row.id) }>X</button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    )
}