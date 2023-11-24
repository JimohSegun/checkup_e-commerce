const styles = {
  heading:
    "font-cormorant font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-cormorants font-normal text-dimBlack text-[16px] leading-[20px] sm:text-[18px] sm:leading-[25px] ",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",

  marginX: "sm:px-12 px-4",
  marginY: "sm:my-16 my-6",
  boxWidth: "xl:max-w-[1280px] w-full",
};

export const layout = {
  section: `flex sm:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
};

export default styles;
