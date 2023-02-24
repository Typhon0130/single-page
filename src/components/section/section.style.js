import styled from "styled-components";

export default styled.section`
  display: block;
  padding; 0 1rem;
  ${(props) => (props.position ? `position:${props.position}` : "")};
  ${(props) => (props.display ? `display:${props.display}` : "")};
  ${(props) => (props.alignItems ? `align-items:${props.alignItems}` : "")};
  ${(props) => (props.paddingTop ? `padding-top:${props.paddingTop}` : "")};
  ${(props) => (props.backgroundImage ? `background: no-repeat url(${props.backgroundImage})` : "")};
`;