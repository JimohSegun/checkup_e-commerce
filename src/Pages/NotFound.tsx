import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../style';

const NotFound = () => {
  return (
    <section className={`${styles.paddingX}  ${styles.paddingY} flex flex-col items-center`}>
      <h1 className="text-[60px] leading-[45px] ss:text-[80px] ss:leading-[70px] font-extrabold text-gradient font-cormorant mb-[20px]">
     404
      </h1>
      <h2 className={`${styles.heading3} mb-[20px] text-center`}>
        Sorry, the page you were looking for was not found.
      </h2>
      <Link to="/" className={`${styles.paragraph}`}>
        Return Home
      </Link>
    </section>
  );
}

export default NotFound
