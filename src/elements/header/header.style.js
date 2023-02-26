import styled from "styled-components";

export const H1Wrapper = styled.h1`
  color: #515151;
  font-size: 4rem;
  text-align: left;
  line-height: 1.2;
  font-weight: revert;
  font-family: revert;
  ${(props) => (props.fontSize ? `font-size:${props.fontSize}` : "")};
  ${(props) => (props.letterSpacing ? `letter-spacing:${props.letterSpacing}` : "")};
  ${(props) => (props.color ? `color:${props.color}` : "")};
`;

export const H2Wrapper = styled.h2`
color:#515151
  font-size: 1.5em;
`;

export const H3Wrapper = styled.h3`
  font-size: 1em;
`;

export const H4Wrapper = styled.h4`
  font-size: 1.33em;
`;

export const H5Wrapper = styled.h5`
  font-size: 0.83em;
`;

export const H6Wrapper = styled.h6`
  font-size: 0.67rem;
`;