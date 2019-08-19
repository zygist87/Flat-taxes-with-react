import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: #42b8b6;
  padding: 0px 15px;
  .Header--navigation {
    max-width: 1020px;
    margin: 0 auto;
    &-item {
      color: white;
      padding: 20px 10px;
      line-height: 20px;
      font-size: 20px;
      display: inline-block;
      transition: opacity: 0.3s;
      &:hover, &.active {
          opacity: 0.6s;
          background: white;
          color: #42b8b6;

      }
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <nav className="Header--navigation">
        <NavLink
          exact
          //   to={ROUTES.defaultPage}
          className="Header--navigation-item"
        >
          Declaration
        </NavLink>
        <NavLink exact className="Header--navigation-item">
          History
        </NavLink>
        <NavLink
          exact
          //   to={ROUTES.favourites}
          className="Header--navigation-item"
        >
          Empty page
        </NavLink>
      </nav>
    </StyledHeader>
  );
}

export default Header;
