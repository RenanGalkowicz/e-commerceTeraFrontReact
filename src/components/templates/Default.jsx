import React from "react";
import AppNavbar from "../organisms/AppNavbar";
import AppFooter from "../organisms/AppFooter";

export default function Default(props) {
  return (
    <div className="wrapper">
      <AppNavbar />
      {props.children}
      <AppFooter />
    </div>
  );
}
