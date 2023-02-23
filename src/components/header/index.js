import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../elements/buttons/index";
import Layout from "../../elements/layouts";
import Images from "constants/img.constant";
import Img from "elements/img";
import Nav from "elements/nav";
import HeaderWrapper from './header.style';

function Header() {
  const { Row, Container } = Layout;
  const { Ul, Li } = Nav;
  const { Logo } = Images;

  return (
    <HeaderWrapper>
      <Container>
        <Row vertical="center" horizontal="space-between">
          <Img src={Logo} className="logo-img" />
          <Nav className="nav">
            <Ul>
              <Li className = "nav-li">
                <NavLink to="/">Home</NavLink>
              </Li>
              <Li className = "nav-li">
                <NavLink to="/">DRIVECLASS</NavLink>
              </Li>
              <Li className = "nav-li">
                <NavLink to="/">PRICING</NavLink>
              </Li>
              <Li className = "nav-li">
                <NavLink to="/">FAQ</NavLink>
              </Li>
              <Li className = "nav-li">
                <NavLink to="/">LINKS</NavLink>
              </Li>
              <Li className = "nav-li">
                <NavLink to="/">KONTAKT</NavLink>
              </Li>
            </Ul>
          </Nav>
          <Button className="btn-logo">LOG IN</Button>
        </Row>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
