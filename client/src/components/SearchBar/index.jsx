import React from 'react'
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import "./searchBar.css"

function SearchBar(props) {
    return (
        <Container>
            <h3 className="pt-2">Book Search</h3>
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
                            <Button variant="secondary" onClick={props.handleFormSearch}>Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>

        </Container >
    )
}

export default SearchBar;