import styled from "styled-components";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaSearch,
} from "react-icons/fa";
import { LaptopWidth } from "../../CommonStyles";

export const Wrapper = styled(LaptopWidth)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SocialMediaItems = styled.section`
  display: flex;
  align-items: center;

  svg {
    margin-right: 1em;
  }
`;

export const Facebook = styled(FaFacebookF)``;
export const Instagram = styled(FaInstagram)``;
export const Twitter = styled(FaTwitter)``;
export const Linkedin = styled(FaLinkedinIn)``;

export const Search = styled(FaSearch)``;

export const Logo = styled.p`
  font-size: 2.5em;
  font-weight: 300;
  margin: 0.6em 0;
`;

export const SiteItems = styled.section`
  display: flex;
  align-items: center;

  svg {
    padding-left: 1em;
  }
`;
