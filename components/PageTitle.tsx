import React, { ReactNode, CSSProperties } from "react";
import styles from "./PageTitle.module.scss";
import Image from "next/image";

type Props = {
  ja: string;
  en: string;
  url: string;
}

export default function Keyvisual({...props} : Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={`/${props.url}`} layout="fill" alt="" />
      </div>
      <h2 className={styles.heading}>
        <span className={styles.ja}>{props.ja}</span>
        <span className={styles.en}>{props.en}</span>
      </h2>
    </div>
  );
} 
