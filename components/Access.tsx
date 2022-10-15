import React, { ReactNode, CSSProperties } from "react";
import styles from "./Access.module.scss";


export default function Access() {

  return (
    <div className={styles.wrapper}>
      <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.2650119895693!2d136.91455102783357!3d34.87469101867925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004850b839e2557%3A0xdafede5f4a8d7452!2z44GV44GP44KJ44GE6IWO5rOM5bC_5Zmo56eR44Kv44Oq44OL44OD44Kv!5e0!3m2!1sja!2sjp!4v1663670806324!5m2!1sja!2sjp" width="600" height="450"  loading="lazy" ></iframe>
      </div>
      <div className={styles.box}>
        <div className={styles.inner}>
          <h3>さくらい腎泌尿器科クリニック</h3>
          <dl>
            <dt>住所</dt>
            <dd>
              <span>〒475-0837<br></br>愛知県半田市有楽町６丁目１６３−４</span>
            </dd>
          </dl>
          <dl>
            <dt>電話番号</dt>
            <dd>
              <span>0569-84-7101</span>
            </dd>
          </dl>
          <dl>
            <dt>受付時間</dt>
            <dd>
              <span>午前9:00~12:00<br></br>午後16:00~19:00</span>
            </dd>
          </dl>
          <dl>
            <dt>休診日</dt>
            <dd>
              <span>水曜午後、土曜午後、日曜、祝日</span>
            </dd>
          </dl>
          <dl>
            <dt>駐車場</dt>
            <dd>
              <span>12台</span>
            </dd>
          </dl>
        </div>
      </div> 
    </div>
  );
}
