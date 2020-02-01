import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: #343435;
  color: #fff;
  height: 100vh;
  width: 16em;
  flex-direction: column;
  border-right: 1px solid black;
  z-index: 1;
`;

const Logo = styled.div`
  font-size: 1.2em;
  padding: 1em;
  font-weight: 600;
`;

const Menu = styled.ul`
  margin: 0;
  padding: 0 1em;
  list-style: none;
  font-size: 0.8em;
  font-weight: 500;

  li {
    margin: 0.2em;
    padding: 0.5em;
    background-color: #464648;
    border-radius: 6px;
  }
`;

const SideNav = () => {
  return (
    <Container>
      <Logo>Music</Logo>
      <Menu>
        <li>Browse</li>
      </Menu>
    </Container>
  );
};

export default SideNav;
