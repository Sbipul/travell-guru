import React from 'react';
import {  Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../utilities/Logo.jpg'

const Header = () => {
    return (
        <Navbar className="custom_bg" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                <img
                    src={logo}
                    width="130"
                    height="50"
                    className="logo d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Form style={{width:'35%'}} className="ms-5 d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                </Form>
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link className="mx-4" href="#action1">News</Nav.Link>
                    <Nav.Link className="mx-4" href="#action2">Destination</Nav.Link>
                    <Nav.Link className="mx-4" href="#action2">Blog</Nav.Link>
                    <Nav.Link className="mx-4" href="#action2">Contact</Nav.Link>
                    <button className="mx-4 bg-warning rounded border-0 px-2">Log in</button>
                </Nav>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;