import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import useFetch from "./useFetch";
import TopCustomers from "./customers/TopCustomers";
import TopItems from "./items/TopItems";
import MonthlySales from "./sales/MonthlySales";

function Home() {
    let url = "http://localhost:8000/";
    const {data : customers, cisPending, cerror} = useFetch( url+"customers" )
    const {data : items, iisPending, ierror} = useFetch( url+"items" )
    const {data : sales, sisPending, serror} = useFetch( url+"monthlysales" )
    return (
        <div className="main">
            <Container>
                <Row>
                    <Col sm={4}>
                        <b>Top Customers</b>
                        <div>
                            {cerror && <div> Error: {cerror} </div> }
                            {cisPending && <div> Loading data... </div> }
                            {customers && <TopCustomers customers={customers} /> }
                        </div>
                    </Col>
                    <Col sm={4}>
                        <b>Top Products</b>
                        <div>
                            {ierror && <div> Error: {ierror} </div> }
                            {iisPending && <div> Loading data... </div> }
                            {items && <TopItems items={items} /> }
                        </div>
                    </Col>
                    <Col sm={4}>
                        <b>Sales</b>
                        <div>
                            {serror && <div> Error: {serror} </div> }
                            {sisPending && <div> Loading data... </div> }
                            {sales && <MonthlySales sales={sales} /> }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;