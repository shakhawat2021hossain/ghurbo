import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar
        bg="light"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home" className="brand text-info">
            Ghurbo
          </Navbar.Brand>
          <Navbar.Toggle
            className="navbar-toggler ml-auto custom-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#nav3"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/placeOrder">
              Place Order
            </Nav.Link>
            <Nav.Link as={Link} to="/allOrders">
              All Orders
            </Nav.Link>

            <Navbar.Text>
              {user.email && (
                <div className="username text-info px-2">
                  {user?.displayName || user?.email}
                </div>
              )}
            </Navbar.Text>
            {user?.email ? (
              <button onClick={logOut}>Log Out</button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Log In
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
