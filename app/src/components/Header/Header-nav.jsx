import React, { Fragment } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logoVereda from '../../assets/logo.png'
import background from '../../assets/header-background.png'

// https://stackoverflow.com/questions/61314053/react-bootstrap-custom-nav-link-active-style-is-not-working

var backgroundImage = {
    backgroundImage: `url(${background})`
}

export default function Header() {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">
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
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/empresa">Empresa</Nav.Link>
                    <NavDropdown title="Serviços" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/servicos/wire">Colocação de Wire</NavDropdown.Item>
                        <NavDropdown.Item href="/servicos/pendentes">Colocação de espiral com wire e pendente</NavDropdown.Item>
                        <NavDropdown.Item href="/servicos/espirais">Colocação de espirais plásticos e metálicos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/servicos/empastamento">Empastamento</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Produtos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="produtos/wire">Wire</NavDropdown.Item>
                        <NavDropdown.Item href="produtos/pendentes">Pendentes</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/clientes">Clientes</Nav.Link>
                    {/* <Nav.Link href="#link">Blog</Nav.Link> */}
                    <Nav.Link href="/contato">Contato</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>)
}