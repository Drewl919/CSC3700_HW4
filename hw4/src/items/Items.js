import React from 'react';
import useFetch from "../useFetch";
import ShowItems from "./ShowItems";

function Items() {
    let url = "http://localhost:8000/items";
    const {data : items, isPending, error} = useFetch( url );
    return (
        <div className="main">
            { error && <div> Error: {error} </div> }
            { isPending && <div> Loading ...</div>}
            { items && <ShowItems items={items}/>}
        </div>
    );
}

export default Items;