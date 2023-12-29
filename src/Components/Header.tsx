import { close, logo, menu } from "../assets";
import { navlinks } from "../Constant";
import { NavLink, useLocation } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"


    const Header = () => {
    const navigate = useNavigate();
    const [searchBox, setSearchBox] = React.useState("");
    const [click, setClick] = React.useState(false);
    const [scrolled, setScrolled] = React.useState<boolean>(false);

  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[1];

  function Linkness(type: string | null = null): string {
    if (subpage === " ") {
      subpage = "product";
    }
    let classes =
      "font-cormorant font-medium leading-[20px] text-[18px] transition mr-7 hover:text-primary";
    if (type === subpage) {
      classes += " text-primary underline";
    } else {
      classes += " text-dimBlack";
    }
    return classes;
  }


    useEffect(() => {
      const onscroll = () => {
        if (window.scrollY > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", onscroll);
      return () => window.removeEventListener("scroll", onscroll);
    }, []);


    const handleChange = () => {
      setClick((preClick) => !preClick);
    };

  function handleSearch() {
    if (searchBox.trim().length !== 0) {
      navigate("search", { state: searchBox });
    }
  }



    return (
      <nav
        className={`${
          scrolled
            ? "nav-shadow-box  bg-white fixed z-[9999] xl:max-w-[1280px] "
            : "bg-secondary "
        } w-full flex justify-between items-center md:py-[20px] py-[12px] rounded-b-[10px] sm:px-16 px-6 `}
      >
        <div className="flex flex-row items-center justify-center">
          <div className=" mr-6">
            <NavLink to="/" className="flex item-center justify-center ">
              <img src={logo} alt="logo" className="w-[42px] h-[40px]" />
              <span className="text md:text-[30px] text-[25px] font-extrabold logo-gradient me-[1px] leading-[45px] flex-1">
                Checkup
              </span>
            </NavLink>
          </div>

          <ul className="hidden md:flex flex-row items-center justify-center list-none flex-1 ">
            <li
              className={Linkness ("product")}
            >
              <NavLink to="/product">Product</NavLink>
            </li>

            <li
              className={Linkness("shoe")}
            >
              <NavLink to="/shoe">Shoes</NavLink>
            </li>
            <li
              className={Linkness("about")}
            >
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>

        <div className="md:flex items-center justify-end hidden ">
          <div className="flex px-[8px] py-[5px] bg-gray rounded-[30px] cursor-pointer search-input mr-10">
            <div className="p-[7px] rounded-[20px] flex items-center justify-center  hover:bg-secondary">
              <BiSearchAlt2
                className=" text-[23px] font-normal"
                onClick={handleSearch}
              />
            </div>
            <input
              type="text"
              placeholder="search"
              value={searchBox}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              onChange={(e) => setSearchBox(e.target.value)}
              className="border-none outline-none py-[5px] px-[10px] rounded-[20px] bg-gray cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center">
            <Link
              to="/signup"
              className="bg-primary text-[18px] px-[25px] py-[12px] text-white border-none outline-none font-semibold leading-[20px] rounded-[10px] mr-3 nav-button-shadow font-cormorant transition btn"
            >
              Sign Up
            </Link>

            <Link
              to="login"
              className=" bg-gray text-[18px] px-[25px] py-[12px] text-dimBlack border-none outline-none font-semibold leading-[20px] rounded-[10px] nav-button-shadow font-cormorant transition btn"
            >
              log In
            </Link>
          </div>
        </div>

        <div
          className={`${
            click ? "block" : "hidden"
          } fixed inset-0 z-[2]  top-[70px] overlay`}
        ></div>

        {/* mobile navbar*/}
        <div className="md:hidden flex flex-col">
          <div className="app__navbar-mobile_image" onClick={handleChange}>
            <img
              src={click ? close : menu}
              alt="menu"
              className="h-[25px] w-[50px]"
            />
          </div>

          <div
            className={`${
              click ? "right-[0]" : "right-[-100%]"
            } flex flex-col fixed items-start top-[70px] w-[full] md:w-[50%] h-[full] md:h-[50%] py-7 px-6 flex-1 z-[3] slide-transition bg-white`}
          >
            <a href="#" className=" flex item-center justify-center ">
              <img src={logo} alt="logo" className="w-[37px] h-[35px] " />
              <span
                className="md:text-[30px] text-[25px] font-extrabold text-black me-[2px] leading-[35px] 
               flex-1"
              >
                CheckUp
              </span>
            </a>

            <ul className="app__navbar-mobile_links">
              {navlinks.map(({ id, title }, index) => (
                <li
                  key={index}
                  className="font-medium leading-[30px] text-[18px] mt-4 font-cormorant text-dimBlack hover:text-primary"
                >
                  <NavLink to={id}> {title} </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-start justify-center mt-4">
              <div className="flex-1 flex items-center justify-start">
                <Link
                  to="/signup"
                  className=" bg-primary text-[18px] px-[25px] py-[12px] text-white border-none outline-none font-semibold  leading-[20px] rounded-[10px] nav-button-shadow font-cormorant mr-[28px] transition btn"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="bg-gray text-[18px] px-[25px] py-[12px] text-dimBlack border-none outline-none font-semibold  leading-[20px] rounded-[10px] nav-button-shadow font-cormorant transition btn"
                >
                  log In
                </Link>
              </div>
              <div className="flex-1 flex px-[8px] py-[5px] bg-gray rounded-[30px] cursor-pointer search-input mt-4 ">
                <div className="p-[7px] rounded-[20px] flex items-center justify-center  hover:bg-secondary">
                  <BiSearchAlt2 className=" text-[23px] font-normal" />
                </div>
                <input
                  type="text"
                  placeholder="search"
                  value={searchBox}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  onChange={(e) => setSearchBox(e.target.value)}
                  className="border-none outline-none py-[5px] px-[10px] rounded-[20px] bg-gray cur"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };


export default Header;
