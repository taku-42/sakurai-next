import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.inner}>
      <span className={styles.info}>愛知県半田市の腎泌尿器科クリニック</span>
      {/* <ul className={styles.menu}>
        <li>
          <Link href="/">
            <a>
              トップ
              <span>TOP</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="#news">
            <a>
              お知らせ
              <span>NEWS</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="#access">
            <a>
              アクセス
              <span>ACCESS</span>
            </a>
          </Link>
        </li>
      </ul>  */}
      <Button />
      {/* <a href="tel:0569-84-7101"></a>TEL. 0569-84-7101 */}
    </div>
  );
}
 