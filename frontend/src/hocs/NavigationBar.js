import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../media/logo.svg";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavigationBar = ({ isAuth }) => {

    const currentPage = useSelector(state => state.currentPage);
    return (
        <Navbar style={{ backgroundColor: "#E6E6FF" }} expand="lg" fixed='top' collapseOnSelect>
            <Container>
                <Navbar.Brand>
                    <img src={logo}
                        width="60"
                        // height="30"
                        className="d-inline-block align-top"
                        alt="personal app logo" />
                </Navbar.Brand>
                {/* <Navbar.Brand href="#home">
                    <p><img src={burgerMenu} />sa.</p>
                </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className='collapsing-nav'>
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                            href="/"
                            className={`header-nav-link nav-link ${currentPage === "home" && "active"}`}
                        >Home
                        </Nav.Link>
                        {isAuth &&
                            <Nav.Link
                                as={Link}
                                to="/todos/"
                                href="/todos/"
                                className={`header-nav-link nav-link ${currentPage === "todos" && "active"}`}
                            >Todos
                            </Nav.Link>}
                        {isAuth &&
                            <Nav.Link
                                as={Link}
                                to="/fun-polls/"
                                href="/fun-polls/"
                                className={`header-nav-link nav-link ${currentPage === "fun-polls" && "active"}`}
                            >Fun Polls
                            </Nav.Link>}
                        <Nav.Link
                            as={Link}
                            to="/about/"
                            href="/about/"
                            className={`header-nav-link nav-link ${currentPage === "about" && "active"}`}
                        >About
                        </Nav.Link>
                        {!isAuth &&
                            <Nav.Link
                                as={Link}
                                to="/login/"
                                href="/login/"
                                className={`header-nav-link nav-link sign ${currentPage === "login" && "active"}`}
                            >Sign in
                            </Nav.Link>}
                        {isAuth &&
                            <Nav.Link
                                as={Link}
                                to="/logout/"
                                href="/logout/"
                                className={`header-nav-link nav-link sign ${currentPage === "logout" && "active"}`}
                            >Sign out
                            </Nav.Link>}
                        {!isAuth &&
                            <Nav.Link
                                as={Link}
                                to="/register/"
                                href="/register/"
                                className={`header-nav-link nav-link sign ${currentPage === "register" && "active"}`}
                            >Sign up
                            </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
