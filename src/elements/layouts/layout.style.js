import styled from "styled-components";
import { devices } from "../../utils/responsive.style";

export const StyledLayout = styled.section``;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${(props) => (props.vertical ? `align-items:${props.vertical}` : "")};
  ${(props) => (props.textAlign ? `text-align:${props.textAlign}` : "")};
  ${(props) => (props.horizontal ? `justify-content:${props.horizontal}` : "")};
`;

export const StyledColumn = styled.div`
  ${(props) => (props.display ? `display:${props.display}` : "")};
  ${(props) => (props.justifyContent ? `justify-content:${props.justifyContent}` : "")};
  align-items: center;
  ${(props) => (props.width ? `width:${props.width}` : "")};
  ${(props) => (props.height ? `height:${props.height}` : "")};
  ${(props) => (props.border ? `border:${props.border}` : "")};
  ${(props) => (props.borderRadius ? `border-radius:${props.borderRadius}` : "")};
`;

export const StyledContainer = styled.div`
  margin: auto;
  // text-align: center;
  // @media ${devices.mobileS} {
  //   max-width: 280px;
  // }

  // @media ${devices.mobileM} {
  //   max-width: 335px;
  // }

  // @media ${devices.mobileL} {
  //   max-width: 385px;
  // }

  // @media ${devices.tablet} {
  //   max-width: 728px;
  // }

  // @media ${devices.laptop} {
  //   max-width: 984px;
  // }

  // @media ${devices.laptopL} {
  //   max-width: 1024px;
  // }

  // @media ${devices.desktop} {
  //   max-width: 1620px;
  // }
  padding: 0 2.5vw 0 2.5vw;
  ${(props) => (props.padding ? `padding:${props.padding}` : "")};
  flex: 1;
`;
