import React, { ReactNode, CSSProperties } from "react";
import styles from "./Logo.module.scss";

import Image from "next/image";

export default function Keyvisual() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src="/logo.png" layout="fill" alt="" />
      </div>
    </div>
  );
}
