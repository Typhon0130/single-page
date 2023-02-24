import { H1 } from "elements/header";
import Layout from "elements/layouts";
import React from "react";
import Nav from "elements/nav";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import Img from '../../elements/img';
import Images from "constants/img.constant";

import Navwrapper from "./nav.style";
import Section from "components/section";

function NavCom() {
  const { Row, Column, Container } = Layout;
  const { Ul, Li } = Nav;
  const { Rect1 } = Images;

  return (
    <>
      <Navwrapper background="#fff" position="fixed" top="0" right="0" left="0">
        <Container>
          <Row vertical="cneter" horizontal="space-between">
            <Column>
              <H1 fontSize="50px" fontWeight="normal" letterSpacing="0.04em">
                Driveclass.
              </H1>
            </Column>
            <Column>
              <Nav className="nav" color="#fff">
                <Ul>
                  <Li className="nav-li">
                    <NavLink to="/home">Home</NavLink>
                  </Li>
                  <Li className="nav-li">
                    <NavLink to="/">Fahrschüler</NavLink>
                  </Li>
                  <Li className="nav-li">
                    <NavLink to="/">Fahrlehrer</NavLink>
                  </Li>
                  <Li className="nav-li">
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
                    border="1px solid #AAFFA3"
                  >
                    <CiSearch fontSize={"20px"} color="#AAFFA3" />
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
                    border="1px solid #AAFFA3"
                  >
                    <AiOutlineUser fontSize={"20px"} color="#AAFFA3" />
                  </Column>
                </NavLink>
              </Li>
            </Column>
          </Row>
        </Container>
      </Navwrapper>
      <Section position="relative"  backgroundImage={Rect1}>
        <Container>

        </Container>
      </Section>
    </>
  );
}

export default NavCom;
