const styles = {
  heading2:
    "font-cormorant font-extrabold sm:text-[48px] sm:leading-[45px] text-[40px] leading-[35px] ",
  heading3:
    "font-cormorant font-semibold sm:text-[25px] sm:leading-[30.8px] text-[22px] leading-[25px] w-full",
  paragraph:
    "font-cormorant font-normal text-dimBlack text-[16px] leading-[20px] sm:text-[18px] sm:leading-[25px] ",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexBetween:"flex justify-between items-center",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  boxWidth: "xl:max-w-[1280px] w-full",
};

export const layout = {
  section: `flex sm:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
};

export default styles;
