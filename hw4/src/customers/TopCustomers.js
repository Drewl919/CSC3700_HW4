import {Link} from "react-router-dom";
import React from "react";

function TopCustomers({customers}) {
    return (
        <div>
            <ol>
                {customers.slice(0,5).map((customer) => (
                        <li key={customer.CustomerID}>{customer.CustomerName} - {customer.TotalSales}</li>
                    )
                )}
            </ol>
            <Link className="btn btn-secondary" to={"customers"}><div>Show All</div></Link>
        </div>
    );
}

export default TopCustomers;