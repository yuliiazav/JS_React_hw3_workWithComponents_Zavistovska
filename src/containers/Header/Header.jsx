import styles from "./Header.module.css";
import classNames from "classnames";
import React from "react";

const Header = () => {
  return (
    <header className={classNames(styles.header, styles.accent, "section")}>
      <h1>React Documentation Page</h1>
      <h4>Learn React</h4>
    </header>
  );
};

export default Header;
