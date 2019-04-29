import React from 'react';
import { Container, Row, Col, Input } from 'reactstrap';

const SearchBar = props => {
    return (
        <div className = 'searchBar'>
            <Container>
                <Row>
                    <Col xs = '4'>
                        <h1>Placeholder</h1>
                    </Col>
                    <Col xs = '4'>
                        <Input type = 'text' name = 'search' id = 'search' placeholder = 'Search' />
                    </Col>
                    <Col xs = '4'>
                        <h1>Profile Pic</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SearchBar;