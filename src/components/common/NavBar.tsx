import React from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 2em;
  height: 3em;
  background-color: #343435;
  color: #fff;
  justify-content: flex-end;
`;

const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavItem = styled.li`
  padding: 0 1em;
`;

const NavBar = () => (
  <Container>
    <NavMenu>
      <NavItem>Search</NavItem>
    </NavMenu>
  </Container>
);

export default NavBar;
