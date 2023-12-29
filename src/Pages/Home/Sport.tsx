import React from 'react';
import { Carousel } from "@material-tailwind/react";
import { sport1, sport2, sport3, sport4, sport5 } from '../../assets';
import Links from '../../Constant/Link';
import styles from '../../style';


type SportProps = {
  items: {id: string, img: string, title: string, link: string, value: string} []
}

const Sport = ({items}: SportProps) => {
  return (
    <div className={`${styles.flexBetween} flex-col md:flex-row `}>
      <div className="md:w-[60%] w-full mb-[40px] md:mb-[0] ">
        <Carousel className="rounded-xl h-[400px] ">
          <img
            src={sport1}
            alt="sport shoe"
            className="w-[100%] h-[100%] object-cover"
          />
          <img
            src={sport2}
            alt="sport shoe"
            className="w-[100%] h-[100%] object-cover"
          />
          <img
            src={sport3}
            alt="sport shoe"
            className="w-[100%] h-[100%] object-cover"
          />
          <img
            src={sport4}
            alt="sport shoe"
            className="w-[100%] h-[100%] object-cover"
          />
          <img
            src={sport5}
            alt="sport shoe"
            className="w-[100%] h-[100%] object-cover"
          />
        </Carousel>
      </div>
      <div
        className={`${styles.flexBetween} md:w-[40%] md:justify-start flex-wrap md:gap-[20px] md:ml-[20px]`}
      >
        {items.map((data, id) => {
          const link = { to: data.value, title: data.link };
          return (
            <div key={id} className="relative ">
              <img
                src={data.img}
                alt="image offer"
                loading="lazy"
                className="md:w-[210px] md:h-[auto] sm:w-[300px] w-[175px] rounded-xl mb-[20px] sm:mb-[30px] md:mb-[0]"
              />
              <div className="absolute top-[0px] md:top-[0px] sm:top-[40px] p-[20px]">
                <h2 className="font-cormorant font-semibold sm:text-[18px] sm:leading-[20px] text-[12px] leading-[16px] w-full md:mb-[60px] sm:mb-[90px] mb-[60px] text-white ">
                  {data.title}
                </h2>
                <Links link={link} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sport
