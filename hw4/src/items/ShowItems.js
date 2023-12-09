import React from 'react';
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

function ShowItems(items) {
    function handleDelete(id) {
        let URL = `http://localhost:8000/items/${id}`;
        console.log("Dlfadjsk")
        fetch(URL, {
            method: 'DELETE',
        })
        window.location.reload();
    }
    return (
        <div>
            <h2> Item Management </h2>
            <Table striped bordered>
                <thead>
                <tr>
                    <th> Name</th>
                    <th> Total Sales </th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {items.items.map((item) => (
                            <tr key={item.ItemID}>
                                <td>{item.ItemName}</td>
                                <td>{item.TotalSales}</td>
                                <td className="text-center">
                                    <Link className="btn btn-secondary" to={`/items/${item.ItemID}/${item.ItemName}/${item.ItemPrice}`}> Update </Link>
                                </td>
                                <td className="text-center">
                                    <Button className="btn btn-secondary" onClick={()=>handleDelete(item.ItemID)}> Delete </Button>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </Table>
            <Link className="btn btn-secondary" to={"/items/add-item"}> Insert New Item </Link>
        </div>
    );
}

export default ShowItems;