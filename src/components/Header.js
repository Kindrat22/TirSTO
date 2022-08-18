import React, { Component } from 'react'
import {Navbar, Form, Button, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../imgs/logo.png"
import TabsButton from "./UI/Nav tabs/TabsButton";


export default class Header extends Component {
    render() {
        return (
            <Navbar fixed="top" collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="35"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <TabsButton/>


                        </Nav>
                        <Form className="m-1 text-center">
                            <Button >Search</Button>
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        );
    }
}
