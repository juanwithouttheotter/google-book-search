import React from 'react'
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'


function SearchBar(props) {
    return (
        <Container fluid="true">
            <h3>Book Search</h3>
            <label htmlFor="search">Book</label>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search for Books"
                            aria-label="Search for Books"
                            aria-describedby="search-input"
                            value={props.inputValue} 
                            onChange={props.searchOnChange}
                        />
                        <InputGroup.Append>
                            <Button variant="secondary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>

        </Container >
    )
}

export default SearchBar;