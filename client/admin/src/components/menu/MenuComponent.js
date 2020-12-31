import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
class MenuComponent extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">React-Admin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/category">Danh mục</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Project</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default MenuComponent
