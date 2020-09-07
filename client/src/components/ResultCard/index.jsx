import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'

function ResultCard(props) {
    return (
        <Container>
            <Row>
                <Col md={8} xs={6}>
                    <h4>{props.title}</h4>
                    <h5>{props.subtitle}</h5>
                    <h6>Written By {[props.authors]}</h6>
                </Col>
                <Col md={4} xs={6}>
                    <Button variant="info" href={props.link} >View</Button>
                    <Button variant={props.searchPage ? "success" : "danger"} data-id={props.mongoId}>
                            {props.SearchPage ? "Save" : "Delete"} 
                        </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={4} md={4}>
                    <Image src={props.image} thumbnail />
                </Col>
                <Col xs={8} md={8}>
                    <p>{props.description}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ResultCard;