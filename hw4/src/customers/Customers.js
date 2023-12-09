import React from 'react';
import useFetch from "../useFetch";
import ShowCustomers from "./ShowCustomers";

function Customers() {
    let url = "http://localhost:8000/customers";
    const {data : customers, isPending, error} = useFetch( url );
    return (
        <div className="main">
            { error && <div> Error: {error} </div> }
            { isPending && <div> Loading ...</div>}
            { customers && <ShowCustomers customers={customers}/>}
        </div>
    );
}

export default Customers;