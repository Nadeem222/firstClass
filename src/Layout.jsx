import React from "react";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/themeMode";


const Layout = () => {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default Layout;
