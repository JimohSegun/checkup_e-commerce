import React from 'react'
import styles from '../../style';
import { Carousel } from "@material-tailwind/react";
import { dashboard, dashboard1, dashboard2 , dashboard3 } from "../../assets/";
import ButtonLink from '../../Constant/ButtonLink';




const DashBoard = () => {
  const firstLink = { to: "/shoe", title: " Shop Now " };
  const secondLink ={to:"/shoe" , title:"All shoes"}
  return (
    <section>
      <div
        className={`${styles.flexCenter} flex flex-col sm:flex-row md:justify-center mt-[20px]`}
      >
        <div
          className={`${styles.flexStart} flex-col flex-1 sm:mr-[30px] mr-[0] mb-[50px] sm:mb-[0] `}
        >
          <h1 className="text-[55px] leading-[45px] ss:text-[75px] ss:leading-[70px] font-extrabold text-gradient font-cormorant">
            Shoe Gifts <br className="hidden md:block" />
            Deals
          </h1>
          <p
            className={`${styles.paragraph} sm:my-[20px] my-[15px] font-semibold`}
          >
            #Valid until 23/30 | Terms and conditions may apply.
          </p>
          <p className={`${styles.paragraph}  mb-[30px] md:max-w-[500px]`}>
            Nike is renowned for its exceptional quality, setting the standard
            in athletic and leisurewear. Meticulously crafted with cutting-edge
            materials and innovative designs, Nike products ensure durability,
            comfort, and style. From performance-enhancing sportswear to trendy
            street wear, Nike consistently delivers products that meet and
            exceed customer expectations.
          </p>
          <ButtonLink link={firstLink} />
        </div>

        <div className={`${styles.flexCenter}`}>
          <img
            src={dashboard}
            alt="dashboard image"
            className=" md:h-[500px] w-[full] h-[auto] rounded-[12px]"
            loading="lazy"
          />
        </div>
      </div>

      <div
        className={`${styles.flexCenter} sm:mt-16 mt-6 flex-col  md:flex-row`}
      >
        <Carousel className={`${styles.paddingY} md:w-[60%] mr-[30px]`}>
          <img
            src={dashboard1}
            alt="shoe"
            className="h-full w-full object-cover rounded"
          />
          <img
            src={dashboard2}
            alt="shoe"
            className="h-full w-full object-cover rounded"
          />
          <img
            src={dashboard3}
            alt="shoe"
            className="h-full w-full object-cover rounded"
          />
        </Carousel>

        <div className={`${styles.flexStart} flex-col md:w-[40%]`}>
          <p className={`${styles.paragraph}  mb-[30px] md:max-w-[500px] `}>
            Nike shoes are synonymous with superior comfort, durability, and
            performance. Engineered with advanced technology, they provide
            optimal support, cushioning, and breath ability. From running to
            everyday wear, Nike's commitment to innovation ensures a perfect
            blend of style and functionality, making their shoes a reliable
            choice for all activities.
          </p>
          <ButtonLink link={secondLink} />
        </div>
      </div>
    </section>
  );
}

export default DashBoard;
