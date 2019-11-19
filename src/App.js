import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import logo from "./logo.png"

function App() {
  return (
    <div className="App">
      <Navbar bg="white" variant="light">
          <Navbar.Brand href="/" >
              <img src={logo} className="Logo"/>
          </Navbar.Brand>
          <Nav className="mr-auto">
              <Nav.Link href="/">Intro</Nav.Link>
              <Nav.Link href="/analysis">Analysis</Nav.Link>
              <Nav.Link href="/links">Links</Nav.Link>
          </Nav>
      </Navbar>
        <div className="Body">
            <p>
              <b> WELCOME TO SCRAPEIT</b>
            </p>
        </div>
    </div>
  );
}

export default App;
