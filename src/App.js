import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Bloodchart from './components/Bloodchart';
// import Sign from './components/Sign';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <Navbar bg="black" expand="lg">
        <Navbar.Brand href="/" style={{ fontSize: '24px', padding: '10px',  color: '#fff', }}>
          plasamapheris
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='justify-content-end'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"style={{marginLeft:"200px"}}>
            <Nav.Link href="/"style={{ fontSize: '24px', padding: '10px', backgroundColor: '#008000', color: '#fff' }}>Home</Nav.Link>|
            <Nav.Link href="/about"style={{ fontSize: '24px', padding: '10px', backgroundColor: '#F4C0FF', color: '#fff' }}>About</Nav.Link>|
            <Nav.Link href="/contact"style={{ fontSize: '24px', padding: '10px', backgroundColor: '#F020D8', color: '#fff' }}>Contact</Nav.Link>|
            <Nav.Link href="/Bloodchart"style={{ fontSize: '24px', padding: '10px', backgroundColor: '#FFC0CB', color: '#fff' }}>Bloodchart</Nav.Link>|
            {/* <Nav.Link href="/Sign"style={{ fontSize: '24px', padding: '10px', backgroundColor: '#007bff', color: '#fff',marginLeft:"200px" }}>Sign in</Nav.Link>| */}
            <Nav.Link href="/Signup"style={{ fontSize: '24px', padding: '10px', backgroundColor: '#007bff', color: '#fff',marginLeft:"10px" }}>Login</Nav.Link>|
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Bloodchart" element={<Bloodchart />} />
        {/* <Route path="/Sign" element={<Sign />} /> */}
        <Route path="/SignUp" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
