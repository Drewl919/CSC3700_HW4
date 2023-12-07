import React from 'react';
import {Link, Outlet} from "react-router-dom";

function Products(props) {
    return (
        <div>
            <h2> Welcome to products </h2>
            <nav className='featuredNavs'>
                <Link to='featured'> Featured </Link>
                <Link to='new'> New </Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default Products;