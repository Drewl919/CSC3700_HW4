import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {Button, Col, Row} from "react-bootstrap";
import {useHistory, useParams} from "react-router-dom";

function EditItem() {
    const {id, name, price} = useParams();

    const history = useHistory();
    const [newName, setName] = useState(name);
    const [newPrice, setItem] = useState(price);

    const [ isPending, setIsPending ] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {id, newName, newPrice}
        setIsPending( true );
        let URL = `http://localhost:8000/items/${id}`;
        fetch( URL , {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(item)
        })
        setTimeout(() => {
            history.push('/items');
        }, 40);
    }
    return (
        <div className="main">
            <Row>
                <Col sm={3}/>
                <Col sm={6}>
                    <h2> Update item </h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" placeholder="Name"
                                          required
                                          value={newName}
                                          onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPrice">
                            <Form.Label>Item:</Form.Label>
                            <Form.Control type="text" placeholder="Item" required
                                          value={newPrice}
                                          onChange={(e) => setItem(e.target.value)}
                            />
                        </Form.Group>
                        {!isPending && <Button variant="primary" type="submit">Submit</Button>}
                        {isPending && <Button disabled variant="primary" type="submit">Updating item </Button>}
                    </Form>
                </Col>
                <Col sm={3}/>
            </Row>
        </div>
    );
}

export default EditItem;