import React from 'react';
import './EmailTable.css';


export function EmailTable() {
    const clientsList = [
        {id:1, email:"a@gmail.com", file:"file1"},
        {id:2, email:"a@gmail.com", file:"file2"},
        {id:3, email:"a@gmail.com", file:"file3"},
        {id:4, email:"a@gmail.com", file:"file4"}];//props.clientsList;


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
                {clientsList.map((row) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.email}</td>
                        <td>{row.file}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}