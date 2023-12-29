import styles, { layout } from "../../style";
import { shoe } from "../../assets";
import Gift from "./Gift";
import Amazing from "./Amazing";
import { amazings, gifts, trustees, items } from "../../Constant/index";
import Faq from "./Faq";
import Sport from "./Sport";
import ButtonLink from "../../Constant/ButtonLink";



const Home = () => {
const link = { to: "/shoe", title: "Shop Now" };

  return (
    <>
      <section className={`${layout.section} ${styles.paddingX} `}>
        <div
          className={`${styles.flexStart} flex-col flex-1 sm:mr-[30px] mr-[0] mb-[50px] sm:mb-[0] `}
        >
          <h1 className="text-[55px] leading-[45px] ss:text-[75px] ss:leading-[70px] font-extrabold text-gradient font-cormorant">
            Black Friday <br className="hidden md:block" /> Deals{" "}
          </h1>
          <p
            className={`${styles.paragraph} sm:my-[20px] my-[15px] font-semibold`}
          >
            #End 23/30 | Restrictions apply.
          </p>
          <p className={`${styles.paragraph}  mb-[30px] md:max-w-[500px]`}>
            New styles added: Get up to 60% off must-have holiday gifts. Use
            code <span className="font-semibold">BLACKFRIDAY</span> to save
            extra 30% on select shoes. End 11.25 exclusions apply
          </p>
          <ButtonLink link={link} />
        </div>

        <div className={`${styles.flexCenter}`}>
          <img
            src={shoe}
            alt="banner image"
            className=" sm:h-[400px] w-[full] h-[auto] rounded-[12px]"
            loading="lazy"
          />
        </div>
      </section>

      <section
        className={`${styles.paddingX} flex items-start justify-center sm:justify-between sm:items-center flex-col sm:flex-row flex-wrap`}
      >
        {trustees.map((trustee, id) => (
          <div
            key={id}
            className=" text-dimBlack flex items-center mr-[50px] min-w-[100px] sm:mb-[14px] mb-[12px]"
          >
            <h3
              className={`font-cormorant sm:text-[30px] sm:leading-[50.8px] text-[25px] leading-[30px] w-full font-bold text-dimBlack flex-1 mr-2`}
            >
              {trustee.value}
            </h3>
            <p className={`${styles.paragraph} `}>{trustee.title}</p>
          </div>
        ))}
      </section>

      <section className={`${styles.paddingY}`}>
        {<Gift gift={gifts} />}
      </section>

      <section className={`${styles.paddingY} ${styles.paddingX}`}>
        <Amazing amazing={amazings} />
      </section>

      <section className={`${styles.paddingY} ${styles.paddingX}`}>
        <Sport items={items} />
      </section>
      
      <section className={`${styles.paddingY} ${styles.paddingX}`}>
        <Faq />
      </section>
    
    </>
  );
};

export default Home;
