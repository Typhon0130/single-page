import styled from "styled-components";

export default styled.p`
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-size: 1.2em;
  color: #333;
  line-height: 1.15;
  ${(props) => (props.fontSize ? `font-size:${props.fontSize}` : "")};
  ${(props) => (props.letterSpacing ? `letter-spacing:${props.letterSpacing}` : "")};
  ${(props) => (props.color ? `color:${props.color}` : "")};
`;
