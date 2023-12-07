import React from 'react';
import {useAuth } from "./auth";
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

function Profile(props) {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/');
    }

    return (
        <div>
            <h2> Welcome to {auth.user} Profile</h2>
            <Button onClick={handleLogout}> Logout </Button>
        </div>
    );
}

export default Profile;