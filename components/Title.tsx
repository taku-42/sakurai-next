import { ReactNode } from "react";
import styles from "./Title.module.scss";

type Props = {
  ja: string;
  en: string;
  id?: "none";
};

export default function PageTitle({ ...props }: Props) {
  const id = props.id === "none" ? props.id : "";

  return (
    <div className={styles.heading} id={id}>
      <span className={styles.ja}>{props.ja}</span>
      <span className={styles.en}>{props.en}</span>
    </div>
  );
}
