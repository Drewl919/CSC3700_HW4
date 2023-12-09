import React from 'react';
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div className='text-center main'>
            <h2> Page not found!</h2>
            <p> The page cannot be found.</p>
            <Link to="/"> Back to homepage</Link>
        </div>
    );
}

export default NotFound;