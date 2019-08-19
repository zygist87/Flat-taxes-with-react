import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./index.scss";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {/* <Main className="Main">{children}</Main> */}
      <Footer />
    </div>
  );
}

export default Layout;
