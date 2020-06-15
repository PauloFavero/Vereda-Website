import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logoVereda from '../assets/logo.png'
import logoV from '../assets/v_logo.png'

export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logoVereda}
                    width="200"
                    height="80"
                    className="d-inline-block align-center"
                />{''}
    </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Empresa</Nav.Link>
                    <NavDropdown title="Serviços" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Colocação de Wire</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Colocação de espiral com wire e pendente</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Colocação de espirais plásticos e metálicos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Empastamento</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Produtos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/4.1">Wire</NavDropdown.Item>
                        <NavDropdown.Item href="#action/4.2">Pendentes</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Clientes</Nav.Link>
                    <Nav.Link href="#link">Blog</Nav.Link>
                    <Nav.Link href="#home">Contato</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>)
}