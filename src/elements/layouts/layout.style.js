import styled from "styled-components";
import { devices } from "../../utils/responsive.style";

export const StyledLayout = styled.section``;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  ${(props) => (props.vertical ? `align-items:${props.vertical}` : "")};
  ${(props) => (props.horizontal ? `justify-content:${props.horizontal}` : "")};
`;

export const StyledColumn = styled.div`
`;

export const StyledContainer = styled.div`
  margin: auto;
  text-align: center;
  @media ${devices.mobileS} {
    max-width: 280px;
  }

  @media ${devices.mobileM} {
    max-width: 335px;
  }

  @media ${devices.mobileL} {
    max-width: 385px;
  }

  @media ${devices.tablet} {
    max-width: 728px;
  }

  @media ${devices.laptop} {
    max-width: 984px;
  }

  @media ${devices.laptopL} {
    max-width: 1024px;
  }

  @media ${devices.desktop} {
    max-width: 1620px;
  }
  flex: 1;
`;
