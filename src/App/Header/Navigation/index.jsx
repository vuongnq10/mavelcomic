import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styles from './styles.css';
import Icon from './favicon.ico';

const Index = () => (<Navbar expand="lg" variant="light">
  <Navbar.Brand href="/">
    <img src={Icon} alt="" height="24px" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav>
      <Nav.Link className={styles.color} href="/">Home</Nav.Link>
      <Nav.Link className={styles.color} href="/">About Us</Nav.Link>
      <Nav.Link className={styles.color} href="/">Info</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>);

export default Index;
