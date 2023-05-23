import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../styles/Layout.scss";

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
