import React from 'react';
import {Link, Outlet, useSearchParams} from "react-router-dom";
import {Button} from "react-bootstrap";

function Users(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
    return (
        <div>
            <h2> Here are all our users </h2>
            <ol>
                <li key='1'> User 1 <Link to='1'> More Details </Link> </li>
                <li key='1'> User 2 <Link to='2'> More Details </Link> </li>
                <li key='1'> User 3 <Link to='3'> More Details </Link> </li>
            </ol>
            <Outlet/>
            <Button onClick={ () =>
                setSearchParams( { filter: 'active'})} >
                Show Active Users
            </Button>
            <Button onClick={ () =>
                setSearchParams( { })} >
                Reset Filter
            </Button>
            {
                showActiveUsers ?
                    <h2> Showing only the Active Users </h2>
                    :
                    <h2> Showing all the users </h2>
            }
        </div>
    );
}

export default Users;