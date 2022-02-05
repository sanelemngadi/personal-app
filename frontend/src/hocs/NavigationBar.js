import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import burgerMenu from "../media/humburgermenu.svg";

const NavigationBar = () => {
    return (
        <Navbar style={{ backgroundColor: "#E6E6FF" }} expand="lg" fixed='top'>
            <Container>
                <Navbar.Brand>
                    <img src={burgerMenu}
                        width="60"
                        // height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo" />
                </Navbar.Brand>
                {/* <Navbar.Brand href="#home">
                    <p><img src={burgerMenu} />sa.</p>
                </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/todos/">Todos</Nav.Link>
                        <Nav.Link href="#poll">Fun Polls</Nav.Link>
                        <Nav.Link href="#poll">About</Nav.Link>
                        <Nav.Link href="/login/">Log In</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
