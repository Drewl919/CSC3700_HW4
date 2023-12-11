import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {Button, Col, Row} from "react-bootstrap";
import { useHistory } from "react-router-dom";

function CreateCustomer() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [ isPending, setIsPending ] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const customer = { name, email }
        setIsPending( true );
        let URL = "http://localhost:8000/customers";
        fetch( URL , {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(customer)
        })
        setTimeout(null, 50);
        setTimeout(history.push("/customers"), 50);
    }
    return (
        <div className="main">
            <Row>
                <Col sm={3}/>
                <Col sm={6}>
                    <h2> Add new customer </h2>
                    <Form onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" placeholder="Name"
                                          required
                                          value={name}
                                          onChange={ (e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="text" placeholder="Email" required
                                          value={email}
                                          onChange={ (e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        {!isPending && <Button variant="primary" type="submit">Submit</Button>}
                        {isPending && <Button disabled variant="primary" type="submit">Adding Content</Button>}
                    </Form>
                </Col>
                <Col sm={3}/>
            </Row>
        </div>
    );
}

export default CreateCustomer;