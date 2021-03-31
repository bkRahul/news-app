import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e8edf1;
  margin: 0 auto;
`;

export const MenuContainer = styled.ul`
  margin: 0;
  display: flex;
  list-style: none;
  li:last-child a {
    margin-right: 0;
  }
`;

export const MenuItem = styled(NavLink)`
  color: rgba(0, 0, 0, 0.9);
  line-height: 5em;
  font-size: 0.9em;
  font-weight: 600;
  margin-right: 3em;
  text-decoration: none;
  text-transform: capitalize;
  &.active {
    color: #ff7a7f;
  }
`;
