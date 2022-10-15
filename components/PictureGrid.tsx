import Image from "next/image";
import styles from "./PictureGrid.module.scss";

export default function ArticleGrid() {

  return (
    <ul className={styles.wrapper}>
      <li className={styles.item}>
        <Image src="/pictureGrid-1.webp" layout="fill" alt="" />
      </li>
      <li className={styles.item}>
        <Image src="/pictureGrid-2.webp" layout="fill" alt="" />
      </li>
      <li className={styles.item}>
        <Image src="/pictureGrid-3.webp" layout="fill" alt="" />
      </li>
      <li className={styles.item}>
        <Image src="/pictureGrid-4.webp" layout="fill" alt="" />
      </li>
    </ul >
  );
}
