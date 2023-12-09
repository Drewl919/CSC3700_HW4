import React from 'react';
import {Table} from "react-bootstrap";

function ShowSales(sales) {
    return (
        <div>
            <Table striped bordered>
                <thead>
                <tr>
                    <th> Date</th>
                    <th> Customer </th>
                    <th> Product </th>
                    <th> Quantity </th>
                    <th> Total Sales </th>
                </tr>
                </thead>
                <tbody>
                {sales.sales.map((sale) => (
                        <tr key={sale.ItemID}>
                            <td>{sale.Date}</td>
                            <td>{sale.CustomerName}</td>
                            <td>{sale.ItemName}</td>
                            <td>{sale.Quantity}</td>
                            <td>{sale.TotalSales}</td>
                        </tr>
                    )
                )}
                </tbody>
            </Table>
        </div>
    );
}

export default ShowSales;