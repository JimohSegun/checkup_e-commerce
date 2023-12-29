import React from 'react';
import styles from "../../style";
import Link from '../../Constant/Link';


type AmazingProps = {
    amazing : { img: string} []
}

const Amazing = ({amazing}: AmazingProps) => {

const shop = { title: "Shop", to: "home" };

  return (
    <div>
      <h3 className={`${styles.heading3} sm:mb-[16px] mb-[30px]`}>
        Give The Greatest
      </h3>
      <div
        className={`sm:flex-row sm:flex  sm:justify-between items-center border-[2px] p-[15px] flex flex-col-reverse oksegun`}
      >
        <div className={`${styles.flexStart} flex-col `}>
          <h2 className={` ${styles.heading2} uppercase `}>Best Offers </h2>
          <p className={`${styles.paragraph} py-[20px]`}>
            Win the holyday with the best amazing offer
          </p>
          <Link link={shop} />
        </div>

        <div className="flex justify-start items-center overflow-hidden mb-[12px] sm:mb-[0]">
          {amazing.map((image, index) => (
            <img
              src={image.img}
              alt="shoe"
              loading="lazy"
              key={index}
              className={`${
                index === amazing.length - 1 ? "ml-[10px] sm:ml-[20px]" : null
              } sm:w-[300px] sm:h-[300px] h-[100%]  w-[170px] `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Amazing
