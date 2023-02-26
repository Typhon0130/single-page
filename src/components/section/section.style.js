import styled from "styled-components";

export default styled.section`
  display: block;
  padding: 2rem 0;
  ${(props) => (props.position ? `position:${props.position}` : "")};
  ${(props) => (props.display ? `display:${props.display}` : "")};
  ${(props) => (props.alignItems ? `align-items:${props.alignItems}` : "")};
  ${(props) => (props.paddingTop ? `padding-top:${props.paddingTop}` : "")};
  ${(props) => (props.backgroundImage ? `background: no-repeat url(${props.backgroundImage})` : "")};
  ${(props) => (props.backgroundPosition ? `background-position:${props.backgroundPosition}` : "")};
  ${(props) => (props.backgroundSize ? `background-size:${props.backgroundSize}` : "")};
  ${(props) => (props.height ? `height:${props.height}` : "")};
  ${(props) => (props.justifyContent ? `justify-content:${props.justifyContent}` : "")};
  
`;