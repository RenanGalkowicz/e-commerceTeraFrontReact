import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoRC from "../../images/logoRC.png";

export default function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary headder">
      <Container id="navbarapp" fluid>
        <Navbar.Brand href="/">
          <img src={logoRC} className="responsive logo" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Página inicial</Nav.Link>
            <NavDropdown title="Produtos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Masc">Moda Masculina</NavDropdown.Item>
              <NavDropdown.Item href="/Fem">Moda Feminina</NavDropdown.Item>
              <NavDropdown.Item href="/Infan">Moda infantil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Mais opções em breve
              </NavDropdown.Item>
              <NavDropdown.Item href="/cadProdutos">
                Cadastrar Produtos
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Contato">Contatos</Nav.Link>
            <Nav.Link href="/Login">Login </Nav.Link>
            <Nav.Link href="/Cadastro">Cadastre-se </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pesquise seus produtos"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Pesquisar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
