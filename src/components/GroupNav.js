import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components";
import color from '../Color.js';

const NavWrap = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	width: 20vw;
	height: 100vh;
	padding-top: 15vh;
  border-right: 1px solid ${color.border1};
  text-align: center;
  box-sizing: border-box;
`
const Nav = styled.div`
  color: ${color.secondary};
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 1em;
  cursor: pointer;
  ${props => props.isSelected && `
  color: ${color.primary};
  font-weight: 700;`
  }
`

export default function GroupNav() {
  const location = useLocation();
  return (
		<NavWrap>
      <Link to="/todolist" style={{textDecoration: 'none'}}>
        <Nav isSelected = {location.pathname === '/todolist'}>Todo List</Nav>
      </Link>
      <Link to="/weather" style={{textDecoration: 'none'}}>
        <Nav isSelected = {location.pathname === '/weather'}>Weather</Nav>
      </Link>
		</NavWrap>
  );
}