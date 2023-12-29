import React from "react";
import { useLocation } from "react-router-dom";
import styles from "../style";

const Error = () => {
  const location = useLocation();
  const error = (location.state && location.state.error) || {
    status: "Item Not Found",
    statusText: "Server Error",
  };
console.log(error)
  return (
    <section className={`${styles.paddingX} ${styles.paddingY} flex flex-col items-center justify-center `}>
      <h2 className={`${styles.heading2} mb-[21px]`}>Error {error.message}</h2>
      <pre className={`${styles.paragraph}`}>
        {error.status} - {error.statusText}
      </pre>
    </section>
  );
};

export default Error;
