import React, {Component} from 'react';
import {Container, FormControl, Nav, Navbar, Form, Button} from 'react-bootstrap'
import logo from '../imgs/logo.png'
import ProgressBar from 'react-bootstrap/ProgressBar';


class Header extends Component {
    render() {
        return (

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky={"top"} >
                <Container>
                    <Navbar.Brand href="/" >
                        <img
                                src={logo}
                                height="35"
                                width="40"
                                className="me-auto"
                                alt="logo"
                        />

                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" variant={"pills"} >
                                <Nav.Link href="/" >HOme   </Nav.Link>
                                <Nav.Link href="/">Abaut   </Nav.Link>
                                <Nav.Link href="/dds">tel   </Nav.Link>
                                <Nav.Link href="/dsdsd">xuy   </Nav.Link>


                        </Nav>



                    </Navbar.Collapse>


                </Container>


            </Navbar>

        );
    }
}

export default Header;