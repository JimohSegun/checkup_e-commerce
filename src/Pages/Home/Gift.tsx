import React, { useRef, useState } from 'react'
import styles from '../../style';
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

type GiftProps = {
  gift: {
    img:string,
    title:string,
    price:string,
  }[]
}



const Gift = ({gift}:GiftProps ) => {
// const [trackBar, setTrackBar] = useState<boolean>(false);

// const scrollRef = useRef<HTMLDivElement>(null!);

// const scroll = (direction: "left" | "right") => {
//   const { current } = scrollRef;
//   if (current) {
//     if (direction === "left") {
//       current.scrollLeft -= 400;
//       setTrackBar(true)
//     } else {
//       current.scrollLeft += 400;
//       setTrackBar(true)
//     }
//   }
// };


 const [trackBar, setTrackBar] = useState<boolean>(false);

 const scrollRef = useRef<HTMLDivElement>(null!);

 const scroll = (direction: "left" | "right") => {
   const { current } = scrollRef;
   if (current) {
     const containerWidth = current.clientWidth;
     const scrollAmount =
       direction === "left" ? -containerWidth * 0.5 : containerWidth * 0.5;
     current.scrollBy({ left: scrollAmount, behavior: "smooth" });
     setTrackBar(true);
   }
 };


  return (
    <div>
      <div
        className={`${styles.flexStart} flex-col md:items-center sm:px-16 px-6`}
      >
        <h2
          className={`${styles.heading2} font-[900] uppercase  text-gradient`}
        >
          A perfect match is <br className="hidden sm:block" /> the perfect
          gifts
        </h2>
        <p className={`${styles.paragraph} font-[500] sm:my-[24px] my-[20px] `}>
          Gift the most versatile and comfortable matching set that is truly
          unforgettable.
        </p>
        <div className="flex ">
          <button
            className="bg-black px-[16px] sm:px-[20px] sm:py-[8px] py-[4px] text-white cursor-pointer rounded-[20px] text-[18px] leading-[20px] 
        hover:bg-gray hover:text-dimBlack transition mr-[10px]"
            type="button"
          >
            Shope Matching sets
          </button>
          <button
            className="bg-black px-[24px] py-[12px] text-white cursor-pointer rounded-[20px] text-[18px] leading-[20px] 
        hover:bg-gray hover:text-dimBlack transition"
            type="button"
          >
            Shop all gifts
          </button>
        </div>
      </div>

      <div className=" sm:mt-[70px] mt-[50px]">
        <div className="flex sm:mb-[30px] mb-[25px] sm:px-16 px-6">
          <h3 className={`${styles.heading3}`}>Hottest Gifts</h3>
          <div className="flex items-center justify-center">
            <div className="w-[50px] h-[50px] bg-gray flex items-center justify-center rounded-[30px] mr-3 hover:bg-tertiary">
              <BsChevronLeft
                className="text-[18px] text-dimBlack"
                onClick={() => scroll("left")}
              />
            </div>
            <div className="w-[50px] h-[50px] bg-gray flex items-center justify-center rounded-[30px] mr-3 hover:bg-tertiary">
              <BsChevronRight
                className="text-[18px] text-dimBlack"
                onClick={() => scroll("right")}
              />
            </div>
          </div>
        </div>

        <div
          className={`${
            trackBar
              ? "scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-x-scroll"
              : ""
          } flex items-center justify-start xl:px-[16px] w-full`}
          ref={scrollRef}
        >
          {gift.map((gifts, id) => (
            <div
              key={id}
              className="flex flex-col justify-center items-start mr-[18px] flex-shrink-0 "
            >
              <div className="border-[12px] border-gray z-[10]">
                <img
                  src={gifts.img}
                  alt="gift image"
                  loading="lazy"
                  className="sm:w-[500px] sm:h-[350px] w-[300px] h-[auto] z-[0] border-[2px] border-tertiary"
                />
              </div>
              <div
                className={`${styles.paragraph} sm:mt-[20px] mt-[16px] font-semibold  mb-[35px] flex flex-col`}
              >
                {gifts.title}{" "}
                <span className="sm:mt-[5px] mt-[3px] text-dimBlack">
                  {gifts.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gift
