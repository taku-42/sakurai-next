import Image from "next/image";
import React, { ReactNode, CSSProperties, useContext } from "react";
import { UrlObject } from "url";
import styles from "./Button.module.scss";

export default function Button() {
  
  return (
    <div className={styles.wrapper}>
      <a href="tel:0569847101" className={styles.inner}>
        <div className={styles.icon}>
          <Image
            src={`/tel.svg`}
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
        <span>0569-84-7101（お問い合わせはこちらから）</span>
      </a>
    </div>    
)
}
