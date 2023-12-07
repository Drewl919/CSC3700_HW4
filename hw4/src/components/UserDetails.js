import React from 'react';
import {useParams} from "react-router-dom";

function UserDetails(props) {
    const {id} = useParams();
    return (
        <div>
            <h2> User Details for ID:{id} </h2>
            Blah blah details id:{id}
        </div>
    );
}

export default UserDetails;