import React from "react";
import {
  Wrapper,
  SocialMediaItems,
  Logo,
  Search,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  SiteItems,
} from "./HeaderTop.styles";

export const HeaderTop = () => {
  return (
    <Wrapper>
      <SocialMediaItems>
        <Facebook />

        <Instagram />

        <Twitter />

        <Linkedin />
      </SocialMediaItems>
      <Logo>
        <span style={{ color: "#ff7a7f", fontWeight: "700" }}>R</span>eact
        <span style={{ color: "#ff7a7f", fontWeight: "900" }}>.</span>
        <span style={{ color: "#ff7a7f", fontWeight: "700" }}>N</span>ews
      </Logo>
      <SiteItems>
        <Search />
        <p>Contact</p>
        <p>Login</p>
      </SiteItems>
    </Wrapper>
  );
};
