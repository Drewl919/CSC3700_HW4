import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {Button, Col, Row} from "react-bootstrap";
import { useHistory } from "react-router-dom";

function CreateItem() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const [ isPending, setIsPending ] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = { name, price }
        setIsPending( true );
        let URL = "http://localhost:8000/items";
        fetch( URL , {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(item)
        })
        setTimeout(() => {
            history.push('/items');
        }, 40);    }
    return (
        <div className="main">
            <Row>
                <Col sm={3}/>
                <Col sm={6}>
                    <h2> Add new item </h2>
                    <Form onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" placeholder="Name"
                                          required
                                          value={name}
                                          onChange={ (e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPrice">
                            <Form.Label>Price:</Form.Label>
                            <Form.Control type="text" placeholder="Price" required
                                          value={price}
                                          onChange={ (e) => setPrice(e.target.value)}
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

export default CreateItem;