import React from 'react';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap'

function App() {
  return (
    <div>
      <Navbar color='ligth' light expand='md' >
        <NavbarBrand >Minha Series</NavbarBrand>
        <NavbarToggler />
        <Collapse isOpen={true} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='/' >Generos</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default App;
