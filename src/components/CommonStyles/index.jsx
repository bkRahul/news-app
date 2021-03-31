import styled from "styled-components";
import { device } from "../../utils/ui";

export const LaptopWidth = styled.section`
  @media ${device.laptop} {
    max-width: 1170px;
    margin: 0 auto;
  }
`;
