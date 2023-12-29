import React, { useState } from "react";
import { getShoe } from "../firebase-config";
import { useLoaderData, useLocation, defer , Await } from "react-router-dom";
import styles from "../style";
import { LoaderFunction, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";



import { FaTruckPickup } from "react-icons/fa";


type Shoe = {
  id: string;
  img: string;
  title: string;
  reviews: string;
  prevPrice: string;
  newPrice: number;
  company: string;
  color: string;
  category: string;
};

type LoaderParams = {
  id: string;
};

export const loader: LoaderFunction<{ params: LoaderParams }> = async ({
  params,
}) => {
  const shoeId = params.id || "";
  return defer({ shoeDetail: getShoe(shoeId) });
};

const ShoeDetails = () => {
  const [count, setCount] = useState<number>(1);
  const shoesData = useLoaderData() as { shoeDetail: Shoe };
  const location = useLocation();
  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  const renderShoes = (shoe: Shoe) => {
    const handleIncrement = () => {
      setCount(count + 1);
    };
    const handleDecrement = () => {
      if (count > 1) {
        setCount(count - 1);
      }
    };
    return (
      <>
        <div
          className={`${styles.flexStart} flex-col md:flex-row justify-center items-center bg-white  gap-x-[60px] p-[50px]`}
        >
          <div className="mr-6 flex items-center justify-center mb-[40px]">
            <img src={shoe.img} alt="shoe" className="w-[400px]  h-[100%] " />
          </div>

          <div className="flex flex-col">
            <h3 className={`${styles.heading3}`}>{shoe.title}</h3>
            {/* price  */}
            <div className="flex items-center justify-start sm:py-[25px] py-[20px]">
              <span className="font-cormorant font-bold text-dimBlack text-[18px] leading-[20px] sm:text-[23px] sm:leading-[25px] mr-[10px]">
                ${shoe.newPrice}
              </span>
              <del className="font-cormorant font-normal text-brown-100 text-[12px] leading-[20px] sm:text-[16px] sm:leading-[25px]">
                {shoe.prevPrice}
              </del>
            </div>
            <p className="font-cormorant text-[14px] leading-[20px] font-normal text-dimBlack">
              Color :{" "}
              <span className="font-normal ml-[20px]">{shoe.color}</span>
            </p>
            {/* quantity */}
            <div className="flex items-center justify-start sm:py-[20px] py-[16px]">
              <p className="mr-[20px] font-cormorant font-normal text-dimBlack text-[14px] leading-[20px] ">
                {" "}
                Quantity :
              </p>
              <div className="flex items-center justify-between border-[1px] border-gray shadow hover:shadow-blue-gray-300">
                <button
                  onClick={handleDecrement}
                  className="pl-[10px] pr-[5px] font-bold text-[20px] text-gray"
                >
                  -
                </button>
                <div className="mx-[5px] border-x-[1px] px-[10px] py-[2px] border-gray">
                  {count}
                </div>
                <button
                  onClick={handleIncrement}
                  className="pr-[10px] pl-[5px] font-bold text-[20px] text-gray"
                >
                  +
                </button>
              </div>
            </div>
            {/* purchase */}
            <p
              className={`font-cormorant font-normal text-dimBlack text-[14px] leading-[20px] flex flex-col items-start justify-center bg-gray px-[16px] py-[5px] w-[205px] rounded-sm`}
            >
              Call us for Bulk Purchases:{" "}
              <span className=" text-red-500 text-[14px]">+2348126419974</span>
            </p>
            {/* buy now */}
            <div className="flex flex-col items-start sm:flex-row sm:items-center justify-start sm:py-[20px] py-[16px]">
              <button className="font-cormorant font-normal text-white text-[16px] leading-[20px] sm:text-[18px] sm:leading-[25px] bg-green-800 sm:px-[100px] px-[80px] sm:py-[10px] py-[7px] sm:mr-[35px] mr-[25px] rounded-[5px]">
                Buy Now
              </button>
              <div className="flex items-center justify-start">
                <div className="w-[40px] h-[40px] bg-gray flex items-center cursor-pointer justify-center rounded-full shoe-detail mt-[10px] sm:mt-[0]">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-[20px] text-white "
                  />
                </div>
                <span className="font-cormorant font-normal text-dimBlack text-[16px] leading-[20px] ml-[10px]">
                  Save for later
                </span>
              </div>
            </div>
            {/* delivery */}
            <div className="flex items-center justify-start py-[16px]">
              <FaTruckPickup className="text-[40px] text-tertiary mr-[20px]" />{" "}
              <span className="">Pickup & Pay on Collection Available</span>
            </div>
            {/* share */}
            <div className={`${styles.flexStart} flex-col`}>
              <p className="font-cormorant font-normal text-dimBlack text-[16px] leading-[20px] sm:mb-[10px] mb-[6px]">
                Share With Friends
              </p>
              <div className="flex items-center">
                <div className="w-[30px] h-[30px] rounded-full border-[1px] flex items-center justify-center text-tertiary hover:text-primary cursor-pointer">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="fontAwesome-blue text-[18px]"
                  />
                </div>
                <div className="w-[30px] h-[30px] rounded-full border-[1px] flex items-center justify-center text-tertiary hover:text-primary cursor-pointer mx-[6px] sm:mx-[10px]">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="fontAwesome-orange text-[18px] "
                  />
                </div>
                <div className="w-[30px] h-[30px] rounded-full border-[1px] flex items-center justify-center text-tertiary hover:text-primary cursor-pointer">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="fontAwesome-blue  text-[18px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <section className={`${styles.marginX} sm:pb-16 pb-6 flex flex-col `}>
      <Link to={`..${search}`} relative="path" className="p-[30px]">
        &larr; <span>Back to {type} shoes</span>
      </Link>
      <React.Suspense
        fallback={<h2 className={`${styles.heading3}`}>Loading shoes...</h2>}
      >
        <Await resolve={shoesData.shoeDetail}>{renderShoes}</Await>
      </React.Suspense>
    </section>
  );
};

export default ShoeDetails;
