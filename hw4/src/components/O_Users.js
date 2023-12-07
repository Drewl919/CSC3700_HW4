import React from 'react';
import {Link, Outlet} from "react-router-dom";

function O_Users(props) {
    return (
        <div>
            <h2> Here are all our users </h2>
            <ol>
                <li key='1'> User 1 <Link to='1'> More Details </Link> </li>
                <li key='1'> User 2 <Link to='2'> More Details </Link> </li>
                <li key='1'> User 3 <Link to='3'> More Details </Link> </li>
            </ol>
            <Outlet/>
        </div>
    );
}

export default Users;