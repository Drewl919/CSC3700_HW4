import React from 'react';
import useFetch from "../useFetch";
import ShowSales from "./ShowSales";

function Sales(props) {
    let url = "http://localhost:8000/sales";
    const {data: sales, isPending, error} = useFetch( url );
    return (
        <div className="main">
            { error && <div> Error: {error} </div> }
            { isPending && <div> Loading ...</div>}
            { sales && <ShowSales sales={sales}/>}
        </div>
    );
}

export default Sales;