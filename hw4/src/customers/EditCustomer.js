import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {Button, Col, Row} from "react-bootstrap";
import {useHistory, useParams} from "react-router-dom";

function EditCustomer() {
    const {id, name, email} = useParams();

    const history = useHistory();
    const [newName, setName] = useState(name);
    const [newEmail, setEmail] = useState(email);

    const [ isPending, setIsPending ] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const customer = {id, newName, newEmail}
        setIsPending( true );
        let URL = `http://localhost:8000/customers/${id}`;
        fetch( URL , {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(customer)
        })
        setTimeout(() => {
            history.push('/customers');
        }, 40);
    }
    return (
        <div className="main">
            <Row>
                <Col sm={3}/>
                <Col sm={6}>
                    <h2> Update customer </h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" placeholder="Name"
                                          required
                                          value={newName}
                                          onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="text" placeholder="Email" required
                                          value={newEmail}
                                          onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        {!isPending && <Button variant="primary" type="submit">Submit</Button>}
                        {isPending && <Button disabled variant="primary" type="submit">Updating customer </Button>}
                    </Form>
                </Col>
                <Col sm={3}/>
            </Row>
        </div>
    );
}

export default EditCustomer;