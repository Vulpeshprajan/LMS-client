import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillHome } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { GiEntryDoor } from "react-icons/gi";
export const Header = () => {
  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">LMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <AiFillHome /> Home
            </Nav.Link>

            <Nav.Link href="#link">
              <MdSpaceDashboard /> Dashboard
            </Nav.Link>
            <Nav.Link href="#link">
              <GiEntryDoor /> Sign out
            </Nav.Link>
            <Nav.Link href="#link">
              <GiEntryDoor /> Sign in
            </Nav.Link>
            <Nav.Link href="#link">
              <ImExit /> Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
