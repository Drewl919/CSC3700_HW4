import {Link} from "react-router-dom";
import React from "react";

function TopItems({items}) {
    return (
        <div>
            <ol>
                {items.slice(0,5).map((item) => (
                        <li key={item.ItemID}>{item.ItemName} - {item.TotalSales}</li>
                    )
                )}
            </ol>
            <Link className="btn btn-secondary" to={"items"}><div>Show All</div></Link>
        </div>
    );
}

export default TopItems;