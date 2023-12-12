import React from 'react';
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

function ShowCustomers(customers) {
    function handleDelete(id) {
        let URL = `http://localhost:8000/customers/${id}`;
        fetch(URL, {
            method: 'DELETE',
        })
        setTimeout(window.location.reload(), 500);
    }
    return (
        <div>
            <h2> Customer Management </h2>
            <Table striped bordered>
                <thead>
                <tr>
                    <th> Name</th>
                    <th> Email</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {customers.customers.map((customer) => (
                            <tr key={customer.CustomerID}>
                                <td>{customer.CustomerName}</td>
                                <td>{customer.CustomerEmail}</td>
                                <td className="text-center">
                                    <Link className="btn btn-secondary" to={`/customers/${customer.CustomerID}/${customer.CustomerName}/${customer.CustomerEmail}`}> Update </Link>
                                </td>
                                <td className="text-center">
                                    <Button className="btn btn-secondary" onClick={()=>handleDelete(customer.CustomerID)}> Delete </Button>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </Table>
            <Link className="btn btn-secondary" to={"/customers/add-customer"}> Insert New Customer </Link>
        </div>
    );
}

export default ShowCustomers;