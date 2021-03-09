import React from "react";

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
          <li className="breadcrumb-item active">Product List</li>
        </ul>
      </div>
    </div>
  );
}

export default BreadCrumb;
