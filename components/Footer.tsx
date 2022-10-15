import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.left}>
            <Image
              src="/schedule.webp"
              width={1182*0.4}
              height={517*0.4}
              objectFit="contain"
              objectPosition="0% 0%"
              alt=""
            />
            <div className={styles.tel}>
              <Button />  
              {/* <span>お問い合わせはこちらから</span> */}
            </div>
        </div>
        <Link href="/">
          <div className={styles.logo}>
            <Image
              src="/keyvisual-2.webp"
              width={300*1.5}
              height={200*1.5}
              objectFit="contain"
              objectPosition="0% 0%"
              alt=""
            />
          </div>
        </Link>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © さくらい腎泌尿器科クリニック. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
