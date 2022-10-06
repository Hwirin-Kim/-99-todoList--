import React from "react";
import "./style.css";

//props를 children으로 받음
const Layout = (props) => {
  return <div className="layout">{props.children}</div>;
};

export default Layout;
