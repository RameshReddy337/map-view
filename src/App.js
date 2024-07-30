// src/App.js
import React from 'react';
import MapView from './MapView';
import './App.css';
// import { Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      <MapView />
    </div>
  );
}

export default App;
