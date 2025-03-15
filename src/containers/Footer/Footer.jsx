import styles from "./Footer.module.css";
import classNames from "classnames";
import React from "react";

const Footer = () => {
  console.log(styles);
  return (
    <footer className={classNames(styles.footer, styles.accent, "section")}>
      <h1>React web-site</h1>
      <h4>2025 Copyright.All rights reserved</h4>
    </footer>
  );
};

export default Footer;
