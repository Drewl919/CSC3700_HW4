import {Link} from "react-router-dom";
import React from "react";

function MonthlySales({sales}) {
    return (
        <div>
            <ol>
                {sales.slice(0,5).map((sale) => (
                            <li key={sale.SalesID}>{sale.Date} - {sale.TotalSales}</li>
                    )
                )}
            </ol>
            <Link className="btn btn-secondary" to={"sales"}><div>Show All</div></Link>
        </div>
    );
}

export default MonthlySales;