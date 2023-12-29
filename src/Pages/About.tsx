import React from 'react'
import styles from '../style';
import {about} from "../Constant/index";
import { company } from '../assets';


const About = () => {
  return (
    <section className={`${styles.paddingX} ${styles.paddingY}`}>
      <h1 className="text-[30px] leading-[45px] ss:text-[50px] ss:leading-[70px] font-extrabold text- font-cormorant text-gradient sm:mb-[35px] mb-[30px]">
        Our Company Overview
      </h1>

      <div className=" bg-gray">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center bg-white px-[12px] py-[21px]">

          <div className='flex flex-col sm:flex-row justify-center items-start '>
            <div className="w-full text-center sm:mt-[70px]">
              {about.map((about) => (
                <p
                  key={about.id}
                  className={`${styles.paragraph} font-semibold sm:mb-[16px] mb-[10px] border border-gray py-[5px] px-[10px] `}
                >
                  {about.title}
                </p>
              ))}
            </div>
            <div className="flex flex-col items-start py-[16px] sm:py-[0] sm:px-[40px] max-w-[800px]">
              <h2 className={`${styles.heading2} mb-[25px]`}>
                {" "}
                Company Overview
              </h2>
              <p className={`${styles.paragraph} `}>
                Checkup.com, established in July 2012, is Nigeria's leading
                online marketplace with a mission to drive commerce and trade
                across Africa. We cater to a rapidly expanding retail customer
                base, providing an extensive array of products spanning diverse
                categories such as Phones, Computers, Clothing, Shoes, Home
                Appliances, Books, healthcare, Baby Products, personal care, and
                more. Our suite of services is meticulously crafted to ensure
                optimal convenience and customer satisfaction throughout the
                retail journey. These offerings include our commitment to the
                lowest price guarantee, a 7-day free return policy*, order
                delivery-tracking, dedicated customer service support, and an
                array of premium services. As our mall continues to evolve,
                expect an enhanced range of offerings characterized by increased
                variety, simplicity, and convenience. Join us on this journey
                and reap the growing benefits. At Checkup.com, we are deeply
                customer-centric, dedicated to pioneering innovative ways to
                enhance our customers' shopping experiences. Share your thoughts
                with us at help@checkup.com. For press-related inquiries, reach
                out to us at press@checkup.com. Thank you for choosing
                Checkup.com; we look forward to ensuring you enjoy a seamless
                and rewarding shopping experience. *Available for select stores
              </p>
            </div>
          </div>

          <div className=" flex justify-center items-center ">
            <img
              src={company}
              alt="company image"
              className="w-[500px] h-full rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
