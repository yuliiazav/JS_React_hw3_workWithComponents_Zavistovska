import styles from "./Link.module.css";
import classNames from "classnames";
import React from "react";

const Link = (props) => {
  return (
    <a
      target="_blank"
      className={classNames(styles.link)}
      href={props.data.href}
    >
      {props.data.title}
    </a>
  );
};

export default Link;
