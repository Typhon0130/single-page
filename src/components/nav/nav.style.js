import styled from "styled-components";

export default styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2rem 0.5rem 2rem 0.5rem;
  ${(props) => (props.background ? `background:${props.background}` : "")};
  ${(props) => (props.position ? `position:${props.position}` : "")};
  ${(props) => (props.top ? `top:${props.top}` : "")};
  ${(props) => (props.right ? `right:${props.right}` : "")};
  ${(props) => (props.left ? `left:${props.left}` : "")};
`;