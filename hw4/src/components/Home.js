import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";


function Home(props) {
    const navigate = useNavigate();
    return (
        <div>
            <h2> Welcome Home human! </h2>
            <Button onClick={ () => navigate('orderSummary')}> View Order </Button>
        </div>
    );
}

export default Home;