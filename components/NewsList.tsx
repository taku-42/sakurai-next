import React, { ReactNode, CSSProperties, useState } from "react";
import styles from "./NewsList.module.scss";
import microCmsClient from "../utils/micro-cms";
import { EndPoints } from "../types/cms-response";
import dayjs from "dayjs";

type Props = {
  news: EndPoints["gets"]["news"];
};

export default function Keyvisual({...props} : Props) {
  const contents = props.news.contents;
  const [clicked, setClicked] = useState(100);
  const handleClick = (index: any) => {
    if (clicked === index) {
      return setClicked(100);
    }

    setClicked(index);
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.inner}>
        {contents.map((v: any, index: any) => (
          <li className={styles.item} key={v.id}>
            <button onClick={() => handleClick(index)}>
              <time>{dayjs(v.publishedAt).format("YYYY年MM月DD日")}</time>
              <span>{v.title}</span>
            </button>
            {clicked === index && (
              <div className={styles.answer} dangerouslySetInnerHTML={{ __html: v.content }} />
            )}
          </li>
        ))}
      </ul> 
    </div>
  );
}
