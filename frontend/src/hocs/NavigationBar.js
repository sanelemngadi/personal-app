import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../media/logo.svg";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavigationBar = ({ isAuth }) => {
    const currentPage = useSelector(state => state.currentPage);

    const navLinks = (item, item_name, link_to, sign) => {
        return (
            <Nav.Link
                as={Link}
                to={link_to}
                href={link_to}
                className={`header-nav-link nav-link ${sign && "sign"} ${currentPage === item && "active"}`}
            >{item_name}
            </Nav.Link>
        )
    }
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
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className='collapsing-nav'>
                    <Nav className="ms-auto">

                        {navLinks("home", "Home", "/", "")}
                        {isAuth && navLinks("todos", "Todos", "/todos/", "")}
                        {isAuth && navLinks("fun-polls", "Fun Polls", "/fun-polls/", "")}

                        {navLinks("about", "About", "/about/", "")}
                        {!isAuth && navLinks("login", "Sign in", "/login/", "sign")}
                        {isAuth && navLinks("logout", "Sign out", "/logout/", "sign")}
                        {!isAuth && navLinks("register", "sign-up", "/register/", "sign")}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
