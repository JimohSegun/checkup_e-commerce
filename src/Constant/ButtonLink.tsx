import React from 'react';
import { Link } from 'react-router-dom';

type LinkProps = {
    link : {to:string, title: string}
}

const ButtonLink = ({link}: LinkProps) => {
  return (
    <Link
      to={link.to}
      className="bg-primary text-[18px] py-[14px] px-[25px] text-white border-none outline-none font-semibold leading-[20px] rounded-[8px] font-cormorant sm:w-[12rem] w-[100%] hover:text-white hover:bg-dimBlack"
    >
      <span className='flex justify-center items-center'> {link.title} &rarr;</span>
    </Link>
  );
}

export default ButtonLink;
