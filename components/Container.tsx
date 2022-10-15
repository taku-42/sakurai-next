import { ReactNode } from "react";
import styles from "./Container.module.scss";

type Props = {
  id?: string;
  children: ReactNode;
};

export default function Container({ ...props }: Props) {
  const hasId = typeof props.id !== "undefined";

  return (
    <>
      {hasId ? (
        <div id={props.id} className={styles.wrapper}>
          {props.children}
        </div>
      ) : (
        <div className={styles.wrapper}>{props.children}</div>
      )}
    </>
  );
}
