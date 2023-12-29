import { getShoes } from "../../firebase-config";
import {  useLoaderData, useSearchParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import styles from "../../style";
import Button from "../../Constant/Button";
import requireAuth from "../../utils";

interface Shoe {
  id: string;
  img: string;
  title: string;
  reviews: string;
  prevPrice: string;
  newPrice: number;
  company: string;
  color: string;
  category: string;
}


export async function loader({ request }: { request: Request }) {
 await requireAuth(request);
 
  return getShoes();
}


const Shoes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const shoes: Shoe[] = useLoaderData() as Shoe[];
  const companyFilter = searchParams.get("company");
  const filteredShoes = companyFilter
    ? shoes.filter((shoe) => shoe.company === companyFilter)
    : shoes;

  const activeStyles = { backgroundColor: "#f20e0e", color: "#fff" };
  const inactiveStyles = {};

  function handleFilterChange(key: string, value: string | null) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <section className="mt-[20px] ">
      <h3 className={`${styles.heading3} uppercase text-gradient`}>
        Discover Our Diverse Range <br className="mb-[9px]" /> of Footwear Options
      </h3>
      <div className={`flex items-center flex-wrap gap-4 pr-[16px] pt-[16px]`}>
        <Button
          button="Nike"
          style={
            companyFilter?.toLowerCase() === "nike"
              ? activeStyles
              : inactiveStyles
          }
          onClick={() => handleFilterChange("company", "Nike")}
        />
        <Button
          button="Adidas"
          style={
            companyFilter?.toLowerCase() === "adidas"
              ? activeStyles
              : inactiveStyles
          }
          onClick={() => handleFilterChange("company", "Adidas")}
        />
        <Button
          button="Vans"
          style={
            companyFilter?.toLowerCase() === "vans"
              ? activeStyles
              : inactiveStyles
          }
          onClick={() => handleFilterChange("company", "Vans")}
        />

        {filteredShoes ? (
          <Button
            button="Clear filter"
            style={
              companyFilter?.toLowerCase() === "null"
                ? activeStyles
                : inactiveStyles
            }
            onClick={() => handleFilterChange("company", null)}
          />
        ) : null}
      </div>

      <div className="flex items-center sm:justify-start justify-center flex-wrap mt-3">
        {filteredShoes.map((data, id) => (
          <div key={id}>
            <div className="m-[20px] p-[16px] md:min-w-[240px] min-w-[250px] cursor-pointer border-[2px] border-dimBlack flex flex-col items-center justify-start">
              <img
                src={data.img}
                alt={data.title}
                className="md:w-[200px] w-[240px] mb-[16px] bg-white"
              />
              <h3
                className={`font-cormorant font-semibold text-[18px] leading-[30.8px] `}
              >
                {data.title}
              </h3>
              <div className="mb-[16px] flex ">
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <span className="font-[14px] ml-[10px]">{data.reviews}</span>
              </div>
              <div className="flex items-center justify-around w-full">
                <div className="">
                  <del className="mr-[5px]">{data.prevPrice}</del>
                  <span className="">{data.newPrice}</span>
                </div>
                <BsFillBagCheckFill />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shoes;
