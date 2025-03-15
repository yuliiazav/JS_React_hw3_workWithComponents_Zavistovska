import styles from "./Sidebar.module.css";
import classNames from "classnames";
import React from "react";
import articles from "../../data/articles.json";
import Link from "../../components/Link/Link";

export default function Sidebar() {
  return (
    <aside className={classNames(styles.sidebar)}>
      <nav>
        <ul>
          {articles.map((article) => (
            <li className={classNames(styles.sidebar__link)} key={article.id}>
              <Link data={article} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
