import React, {Component} from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../imgs/logo.png"
import TabsButton from "./UI/Nav tabs/TabsButton";
import './componentsStyles.css'


export default class Header extends Component {
    render() {
        return (
            <div >
                <div className={'backHeader'}></div>
                <Navbar className='Header' collapseOnSelect expand="sm" bg="dark">
                    <Container>
                        <Navbar.Brand href="#carousel">
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

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        );
    }
}
