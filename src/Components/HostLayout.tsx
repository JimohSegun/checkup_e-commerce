import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../style';
import  CustomNavLink from "../Constant/CustomNavLink";
import { AiOutlineLogout } from "react-icons/ai";


const HostLayout = () => {
  const firstLink = {to:".", title:"DashBoard"}
  const secondLink = {to:"shoe", title:"Shoe"}
  const [open, setOpen] = React.useState<boolean>(false)

  const FakeLogout = () =>{
    localStorage.removeItem("loggedin");
  }
 

  const Click = () => {
    setOpen( preOpen => !preOpen)
  }

  return (
    <nav className={`${styles.paddingX} ${styles.paddingY}`}>
      <div className="flex items-center justify-start">
        <CustomNavLink link={firstLink} />
        <div onClick={Click}>
          <CustomNavLink link={secondLink} />
        </div>
        {open ? (
          <AiOutlineLogout
            onClick={FakeLogout}
            className="cursor-pointer sm:text-[18px] text-[16px] font-extrabold text-red-800"
          />
        ) : null}
      </div>

      <Outlet />
    </nav>
  );
}

export default HostLayout
