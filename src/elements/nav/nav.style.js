import styled from "styled-components";

export const styledLink = styled.a`
  text-decoration: none;
  $:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
  }
`;

export const StyledNav = styled.nav`
  ${(props) => (props.paddingLeft ? `padding-left:${props.paddingLeft}` : "")};
  list-style: none;
`;

export const StyledUl = styled.ul`
  font-weight: 700;
  font-family: revert;
  list-style: none;
  padding-right: 2rem;

  ${(props) => (props.color ? `color:${props.color}` : "")};
`;

export const StyledLi = styled.li`
  display: inline-block;
  color: #424442;
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: #424442;
  }
  padding-left: 15px;
  padding-right: 2rem;
  ${(props) => (props.color ? `color:${props.color}` : "")};
  & {
    a:link,
    a:visited,
    a:hover,
    a:active {
      ${(props) => (props.color ? `color:${props.color}` : "")};
    }
    // a.active {
    //   &:before { 
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     height: 3px;
    //     background: #eee;
    //     border-radius: 2px;
    //     content: "";
    //   }
    // }
  }
`;
