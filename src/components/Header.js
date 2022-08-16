import React, { Component } from 'react'
import {Navbar, Form, Button, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../imgs/logo.png"


export default class Header extends Component {
    render() {
        return (
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="35"
                            width="40"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/about"> About us </Nav.Link>
                            <Nav.Link href="/contacts"> Contacts </Nav.Link>
                            <Nav.Link href="/blog"> Blog </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        );
    }
}
