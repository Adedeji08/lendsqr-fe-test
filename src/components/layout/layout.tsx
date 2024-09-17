import React from "react";

import "../../styles/Layout.scss";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
      <Sidebar />
      <Navbar />
      </div>
      <main className="main__view">{children}</main>
    </div>
  );
};

export default Layout;
