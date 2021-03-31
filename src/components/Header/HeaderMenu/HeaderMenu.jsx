import React from "react";
import { Wrapper, MenuItem, MenuContainer } from "./HeaderMenu.styles";

export const HeaderMenu = () => {
  return (
    <Wrapper>
      <MenuContainer>
        <li>
          <MenuItem to="/" exact>
            Home
          </MenuItem>
        </li>
        <li>
          <MenuItem to="/sports">Sports</MenuItem>
        </li>
        <li>
          <MenuItem to="/travel">Travel</MenuItem>
        </li>
        <li>
          <MenuItem to="/beauty">Beauty</MenuItem>
        </li>
        <li>
          <MenuItem to="/entertainment">Entertainment</MenuItem>
        </li>
        <li>
          <MenuItem to="/art">Art</MenuItem>
        </li>
        <li>
          <MenuItem to="/fashion">Fashion</MenuItem>
        </li>
      </MenuContainer>
    </Wrapper>
  );
};
