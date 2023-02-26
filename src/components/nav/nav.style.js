import styled from "styled-components";
import { devices } from "../../utils/responsive.style";

export default styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1vw 8vw 1vw 8vw;
  ${(props) => (props.background ? `background:${props.background}` : "")};
  ${(props) => (props.position ? `position:${props.position}` : "")};
  ${(props) => (props.top ? `top:${props.top}` : "")};
  ${(props) => (props.right ? `right:${props.right}` : "")};
  ${(props) => (props.left ? `left:${props.left}` : "")};
  ${(props) => (props.zIndex ? `z-index:${props.zIndex}` : "")};
`;