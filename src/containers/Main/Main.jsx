import styles from "./Main.module.css";
import classNames from "classnames";
import React from "react";
import articles from "../../data/articles.json";
import Article from "../../components/Article/Article";

const Main = ({ children }) => {
  return (
    <main className={classNames(styles.main, styles.accent, "section")}>
      <div className={classNames(styles.articles__container)}>
        {articles.map((article) => (
          <Article key={article.id} data={article} />
        ))}
      </div>

      {children}
    </main>
  );
};

export default Main;
