import React from 'react';
import logo from './logo.png';
import {Navbar, Nav, Container} from "react-bootstrap";

function NavBar() {
    return (
        <div className="navBar">
            <Navbar data-bs-theme="dark">
                <Container>
                    <img className="NavImage" src={logo} alt='My logo'/>
                    <h2 className="NavTitle">Happy Harry's Hardware</h2>
                    <Nav>
                        <Nav.Link className="Nav-Item" href="/">Home</Nav.Link>
                        <Nav.Link className="Nav-Item" href="/customers">Customers</Nav.Link>
                        <Nav.Link className="Nav-Item" href="/items">Products</Nav.Link>
                        <Nav.Link className="Nav-Item" href="/sales">Sales</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;