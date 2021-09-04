import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";



const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 0 1.5em;
  background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "#264653"};
`;

const AccessContainer = styled.div`;
 display: right;
 align-items: right;
`;

const AccessLink = styled.a`
 font-size: 20px;
 color: #fff;
 cursor: pointer;
 text-decoration: none;
 outline: none;
 transition: all 200ms ease-in-out;

 &:hover {
   filter: contrast(0.6);
 }
`;





export function Navbar(props) {
  const { useTransparent } = props;

  

  return (
    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogo />
         <Marginer direction = "horizontal" margin={1500}/ >
         <AccessLink>About us</AccessLink>
         <Marginer direction = "horizontal" margin={10}/ >
         <Link to="/student/access">
           <Button size = {15}>Register</Button>
         </Link>
         <Marginer direction = "horizontal" margin={5}/ >
         <Link to="/student/access"> 
         <AccessLink>Login</AccessLink> 
         </Link>  
    </NavbarContainer>
  );
}