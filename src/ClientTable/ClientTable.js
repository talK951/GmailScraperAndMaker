import React from 'react';
import './ClientTable.css';


export function ClientTable() {
    const clientsList = [
        {id:1, name:"Mayooran", email:"a@gmail.com", info:"credit=a"},
        {id:2, name:"Peter", email:"b@gmail.com", info:"credit=b"},
        {id:3, name:"Anna",email:"c@gmail.com", info:"credit=c"},
        {id:4, name:"Suren", email:"d@gmail.com", info:"credit=d"}];//props.clientsList;


    return (
        <>
            <button>TESTING</button>
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
                        <td>{row.info}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}