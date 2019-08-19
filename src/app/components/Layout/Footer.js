import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  color: white;
  text-align: center;
  line-height: 20px;
  font-size: 20px;
  background: grey;
  padding: 20px 20px;
`;

function Footer() {
  return <StyledFooter>© Copywrite {new Date().getFullYear()}</StyledFooter>;
}

export default Footer;
