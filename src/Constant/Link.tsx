import React from 'react';
import { Link } from 'react-router-dom';

type LinkProps = {
  link:{title:string, to:string} 
};


const Links = ({link}:LinkProps) => {
  return (
    <div>
      <Link
        to={link.to}
        className="bg-black px-[16px] sm:px-[20px] sm:py-[8px] py-[4px] text-white cursor-pointer rounded-[20px] text-[18px] leading-[20px] hover:bg-gray hover:text-dimBlack transition mr-[10px]"
        type="button"
      >
       {link.title} 
      </Link>
    </div>
  );
}

export default Links;
