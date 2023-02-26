import { H1 } from "elements/header";
import Layout from "elements/layouts";
import React from "react";
import Nav from "elements/nav";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";

import Navwrapper from "./nav.style";

function NavCom() {
  const { Row, Column, Container } = Layout;
  const { Ul, Li } = Nav;

  return (
    <Navwrapper background="rgb(255 255 255 / 10%)" position="fixed" top="0" right="0" left="0" zIndex="999">
      <Container padding="0">
        <Row vertical="cneter" horizontal="space-between">
          <Column>
            <H1 fontSize="50px" fontWeight="normal" letterSpacing="0.04em" color="#fff">
              Driveclass.
            </H1>
          </Column>
          <Column>
            <Nav className="nav">
              <Ul>
                <Li className="nav-li active" color="#eee">
                  <NavLink className='active' to="/home" color="#fff" >Home</NavLink>
                </Li>
                <Li className="nav-li" color="#eee">
                  <NavLink to="/">Fahrschüler</NavLink>
                </Li>
                <Li className="nav-li" color="#eee">
                  <NavLink to="/">Fahrlehrer</NavLink>
                </Li>
                <Li className="nav-li" color="#eee">
                  <NavLink to="/">faq</NavLink>
                </Li>
              </Ul>
            </Nav>
          </Column>
          <Column>
            <Li className="nav-li" color="#fff">
              <NavLink to="/" className="btn-icon">
                <Column
                  display="flex"
                  borderRadius="50%"
                  justifyContent="center"
                  width="25px"
                  height="25px"
                  border="1px solid #5EC766"
                >
                  <CiSearch fontSize={"20px"} color="#5EC766" />
                </Column>
              </NavLink>
            </Li>
            <Li className="nav-li" border="" borderRadius="">
              <NavLink to="/">
                <Column
                  display="flex"
                  borderRadius="50%"
                  justifyContent="center"
                  width="25px"
                  height="25px"
                  border="1px solid #5EC766"
                >
                  <AiOutlineUser fontSize={"20px"} color="#5EC766" />
                </Column>
              </NavLink>
            </Li>
          </Column>
        </Row>
      </Container>
    </Navwrapper>
  );
}

export default NavCom;
