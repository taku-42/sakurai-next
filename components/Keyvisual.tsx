import React, { ReactNode, CSSProperties } from "react";
import styles from "./Keyvisual.module.scss";

import Image from "next/image";

type Props = {
  reverse: boolean;
}

export default function Keyvisual({...props} : Props) {
  if (props.reverse) {
    return (
      <div className={styles.wrapperReverse}>
        <div className={styles.image}>
          <Image src="/keyvisual-2.webp" layout="fill" alt="" />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <Image src="/keyvisual-1.webp" layout="fill"  alt="" />
        </div>
      </div>
    );
  }
  
}
