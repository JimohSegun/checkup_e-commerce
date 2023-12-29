import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

type NavLinkProps = {
  link: { title: string; to: string };
};

const CustomNavLink = ({ link }: NavLinkProps) => {
  return (
    <RouterNavLink
      to={link.to}
      className="g-black px-[16px] sm:px-[20px] sm:py-[6px] py-[2px] text-white cursor-pointer rounded-[20px] text-[14px] leading-[20px] hover:bg-gray hover:text-dimBlack bg-dimBlack transition nav-button-shadow mr-[16px] btn"
    >
      {link.title}
    </RouterNavLink>
  );
};

export default CustomNavLink;
