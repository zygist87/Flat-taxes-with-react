import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./index.scss";
import styled from "styled-components";
import { Declaration } from "../../pages";

const Main = styled.main`
  max-width: 1020px;
  width: 100%;
  margin: 0 auto;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function Layout({ children }) {
  return (
    <StyledLayout>
      <Header />
      <Main className="Main">
        <Declaration />
      </Main>
      <Footer />
    </StyledLayout>
  );
}

export default Layout;
