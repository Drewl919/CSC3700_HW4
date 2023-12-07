import React from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function OrderSummary(props) {
    const navigate = useNavigate();
    return (
        <div>
            <h2> Welcome to order summary</h2>
            <Button onClick={ () => navigate(-1) }> Go Back </Button>
        </div>
    );
}

export default OrderSummary;