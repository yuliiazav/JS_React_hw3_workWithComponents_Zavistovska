import styles from "./Article.module.css";
import classNames from "classnames";
import React from "react";

const Article = (props) => {
  return (
    <>
      <article className={classNames(styles.article)}>
        <h3 className={classNames(styles.article__title)}>
          {props.data.title}
        </h3>
        <p className={classNames(styles.article__text)}>{props.data.body}</p>
      </article>
    </>
  );
};
export default Article;
