import React from "react";
import styles from "./test.css";
const Test = ({ name }) => (
  <div className={styles.tst}>
    Hello <b>{name}</b>
  </div>
);

export default Test;
