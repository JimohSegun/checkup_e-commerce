import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import styles from '../../style';


 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const Faq = () => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div className={`${styles.flexStart} flex-col`}>
      <h3 className={`${styles.heading3} capitalize sm:mb-[30px] mb-[20px] `}>
        frequently asked questions
      </h3>
      <div>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className=" text-dimBlack"
          >
            Will all of the items in my order arrive in a single package?
          </AccordionHeader>
          <AccordionBody className={`${styles.paragraph}`}>
            If your order consists of items from more than one seller, your
            items will arrive separately. If your order consists of items from a
            single seller, your items may arrive together or separately. If your
            orders arrive separately, be rest assured that the remaining item(s)
            will be delivered shortly
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className=" text-dimBlack"
          >
            Why do I see different prices for the same product?
          </AccordionHeader>
          <AccordionBody className={`${styles.paragraph}`}>
            Checkup is your trusted online marketplace that supports Nigerian
            entrepreneurs and we have many different sellers competing for
            business. Therefore, you may see the same product offered by
            different sellers at different prices. We believe that by supporting
            these 'third-party' sellers, we can offer you a wider product
            selection, more choice, increased convenience, and better pricing.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className=" text-dimBlack"
          >
            What is buyer protection?
          </AccordionHeader>
          <AccordionBody className={`${styles.paragraph}`}>
            We offer all our customers ultimate peace of mind. We have you
            covered 100% on every eligible purchase. Visit the buyer safety Page
            to learn more.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className=" text-dimBlack"
          >
            Why does the estimated delivery time vary?
          </AccordionHeader>
          <AccordionBody className={`${styles.paragraph}`}>
            Checkup is a true online marketplace that empowers Nigerians across
            the country. This means that not all products on  Checkup are sold or
            delivered by  Checkup. In addition,  Checkup buyers and sellers are found
            in every state in Nigeria. Given the various factors involved (the
            time it takes a seller to ship, the courier company used, the
            distance between buyer and seller, and more) delivery times may vary
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq
