import {footerLinks} from "../Constant/index";
import {logo} from "../assets/index";
import { NavLink } from "react-router-dom";
import styles from "../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";




const Footer = () => {
  return (
    <footer className={`${styles.paddingX} ${styles.paddingY} bg-black w-full`}>
      <div className=" flex flex-col ">
        <div className="flex md:flex-row flex-col md:items-center justify-between items-start">
          <div className="flex flex-col items-start justify-center w-full">
            <NavLink
              to="/"
              className="flex item-center justify-center mb-[16px]"
            >
              <img src={logo} alt="logo" className="w-[42px] h-[40px]" />
              <span className="text md:text-[30px] text-[25px] font-extrabold logo-gradient me-[1px] leading-[45px] flex-1">
                Checkup
              </span>
            </NavLink>
            <p
              className={`${styles.paragraph}flex-1 mb-[10px] md:mb-[0] text-tertiary`}
            >
              A new way to make the payments <br /> easy, secure and reliable.
            </p>
          </div>

          <div className="flex items-start justify-between flex-wrap w-full  ">
            {footerLinks.map((footerlink, index) => (
              <div key={index} className=" min-w-[100px] mb-[16px] md:mb-[0]">
                <h3
                  className={`font-cormorant font-semibold sm:text-[22px] sm:leading-[30.8px] text-[18px] leading-[25px] text-gray w-full`}
                >
                  {footerlink.title}
                </h3>
                <ul className="flex flex-col  items-start justify-center">
                  {footerlink.links.map(({ name, link }, index) => (
                    <li key={index} className={`${styles.paragraph} text-tertiary`}>
                      <a href={link}>{name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className=" border-b-[1px] border-tertiary mt-[60px] mb-[20px]"></div>

        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          <p className="flex-1 mb-[16px] sm:mb-[0] text-tertiary font-cormorant font-normal text-[16px] leading-[20px] sm:text-[18px] sm:leading-[25px]">
            Copyright @2023 Checkup. All rights Reserved.
          </p>
          <div className=" flex items-center">
            <div className="sm:w-[40px] sm:h-[40px] w-[35px] h-[35px]  rounded-full border-[1px] flex items-center justify-center text-tertiary hover:text-primary cursor-pointer">
              <FontAwesomeIcon
                icon={faFacebook}
                className="fontAwesome-blue sm:text-[20px] text-[18px]"
              />
            </div>
            <div className="sm:w-[40px] sm:h-[40px] w-[35px] h-[35px] rounded-full border-[1px] flex items-center justify-center text-tertiary hover:text-primary cursor-pointer mx-[6px] sm:mx-[10px]">
              <FontAwesomeIcon
                icon={faInstagram}
                className="fontAwesome-orange sm:text-[20px] text-[18px]"
              />
            </div>
            <div className="sm:w-[40px] sm:h-[40px] w-[35px] h-[35px] rounded-full border-[1px] flex items-center justify-center text-tertiary hover:text-primary cursor-pointer">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="fontAwesome-blue  sm:text-[20px] text-[18px]"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
