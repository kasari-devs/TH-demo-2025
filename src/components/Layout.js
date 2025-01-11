import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Layout() {
    const { currentUser, logOut } = useAuth();
    const navigate = useNavigate();

    async function  handleLogout () {
        try {
            await logOut();
            navigate("/")
        } catch {
            console.error("Failed to log out");
        }
    }

    return (
        <>
        <Navbar bg="light" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">TalentHive</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
            {!currentUser?.email ? (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              </>
            ) : (
              <Button variant="link" onClick={handleLogout}>Log Out</Button>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Container>
        {/* Renders the current route's component */}
        <Outlet />
      </Container>
    </>
    );
}
