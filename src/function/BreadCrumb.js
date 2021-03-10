import React, { useEffect, useState } from "react";

function BreadCrumb() {
  const styles = {
    breadcrumb_wrap: {
      position: "relative",
      padding: "0 15px",
      marginBottom: "30px",
    },
    breadcrumb: {
      margin: 0,
      padding: 0,
      background: "transparent",
    },
  };
  const [name, setName] = useState("Product List");
  const changeNameByFileName = () => {
    let path = window.location.pathname;
    let filename = path
      .replace(/.+?\\(?=\w+)|\.\w+$|\\$/gm, "")
      .split("/")
      .toString();
    let result = filename.replace("-", " ").split(",");
    if (result != name) {
      setName(result);
    } else {
      setName("Product List");
    }
  };
  useEffect(() => {
    window.addEventListener("load", changeNameByFileName);
  });
  return (
    <div style={styles.breadcrumb_wrap} className="breadcrumb-wrap">
      <div className="container-fluid">
        <ul style={styles.breadcrumb} className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="">Products</a>
          </li>
          <li className="breadcrumb-item active">{name}</li>
        </ul>
      </div>
    </div>
  );
}

export default BreadCrumb;
