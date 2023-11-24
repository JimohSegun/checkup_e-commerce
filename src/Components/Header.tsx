import { Component } from "react";
import { close, logo, menu } from "../assets";
import { navlinks } from "../Constant";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="w-full flex justify-between items-center md:px-[24px] md:py-[25px] px-[10px] py-[15px] bg-white nav-shadow-box rounded-[15px] ">
        <div className="flex flex-row items-center justify-center">
          <div className=" mr-6">
            <NavLink to="/" className="flex item-center justify-center ">
              <img src={logo} alt="logo" className="w-[42px] h-[40px]" />
              <span className="text md:text-[30px] text-[25px] font-extrabold text-dimBlack me-[1px] leading-[45px] flex-1">
                Checkup
              </span>
            </NavLink>
          </div>

          <ul className="hidden md:flex flex-row items-center justify-center list-none flex-1">
            <li className="font-cormorant  font-medium leading-[20px] text-[18px]  text-dimBlack hover:text-primary transition mr-7">
              <NavLink to="product">Product </NavLink>
            </li>
            <li className="font-cormorant  font-medium leading-[20px] text-[18px]  text-dimBlack hover:text-primary transition mr-7">
              {" "}
              <NavLink to="solution">Solution </NavLink>
            </li>
            <li className="font-cormorant  font-medium leading-[20px] text-[18px]  text-dimBlack hover:text-primary transition mr-7">
              {" "}
              <NavLink to="learn">Learn </NavLink>
            </li>
            <li className="font-cormorant  font-medium leading-[20px] text-[18px]  text-dimBlack hover:text-primary transition mr-7">
              {" "}
              <NavLink to="pricing">Pricing </NavLink>
            </li>
            <li className="font-cormorant  font-medium leading-[20px] text-[18px]  text-dimBlack hover:text-primary transition">
              <NavLink to="enterprise">Enterprise </NavLink>
            </li>
          </ul>
        </div>

        <div className="md:flex items-center justify-end hidden ">
          <div className="text-[18px] font-medium leading-[20px] mr-[35px] cursor-pointer text-dimBlack hover:text-primary">
            Contact Sales
          </div>
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="bg-primary text-[18px] px-[25px] py-[12px] text-white border-none outline-none font-semibold leading-[20px] rounded-[10px] mr-3 nav-button-shadow font-cormorant transition btn"
            >
              Sign Up
            </button>
            <button
              type="button"
              className=" bg-gray text-[18px] px-[25px] py-[12px] text-dimBlack border-none outline-none font-semibold leading-[20px] rounded-[10px] nav-button-shadow font-cormorant transition btn"
            >
              log In
            </button>
          </div>
        </div>

        <div
          className={`${
            this.state.clicked ? "block" : "hidden"
          } fixed inset-0 z-[2]  top-[80px] overlay`}
        ></div>

        {/* mobile navbar*/}
        <div className="md:hidden flex flex-col">
          <div className="app__navbar-mobile_image" onClick={this.handleClick}>
            <img
              src={this.state.clicked ? close : menu}
              alt="menu"
              className="h-[25px] w-[50px]"
            />
          </div>

          <div
            className={`${
              this.state.clicked ? "right-[0]" : "right-[-100%]"
            } flex flex-col fixed items-start top-[80px] w-[full] md:w-[50%] h-[full] md:h-[50%] py-7 px-6 flex-1 z-[3] slide-transition bg-white`}
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

            <div className="flex flex-col items-center justify-end mt-3">
              <div className="text-[18px] font-medium leading-[30px] text-start flex-1 font-cormorant  hover:text-primary cursor-pointer text-dimBlack">
                Contact Sales
              </div>
              <div className="flex flex-col items-center justify-center w-full mt-5">
                <button
                  type="button"
                  className="bg-primary text-[18px] px-[25px] py-[12px] text-white border-none outline-none font-semibold leading-[20px] rounded-[10px] nav-button-shadow w-[20rem] font-cormorant"
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  className=" bg-gray text-[18px] px-[25px] py-[12px] text-dimBlack border-none outline-none font-semibold leading-[20px] rounded-[10px] nav-button-shadow w-[20rem] mt-3 font-cormorant"
                >
                  log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
