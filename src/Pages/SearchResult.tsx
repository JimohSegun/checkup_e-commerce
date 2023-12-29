import { getShoes } from "../firebase-config";
import { useLoaderData, useLocation } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import styles from "../style";


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


export function loader() {
  return getShoes();
}

const SearchResult = () => {
  const shoes: Shoe[] = useLoaderData() as Shoe[];
  const location = useLocation();
  const search = location.state;
  const filteredShoes = search ? shoes.filter((shoe) => shoe.company === search)
  : shoes;

  return (
    <section className={`${styles.paddingX} ${styles.paddingY}`}>
      <h3 className={`${styles.heading3} uppercase text-gradient ml-4`}>
        Explore our shoe options
      </h3>
      

      <div className="flex items-center sm:justify-start justify-center  flex-wrap mt-3">
        {filteredShoes.map((data, id) => (
          <div
            key={id}
            className="m-[20px] p-[16px] md:min-w-[240px] min-w-[250px] cursor-pointer border-[2px] border-dimBlack flex flex-col items-center justify-start"
          >
            <img
              src={data.img}
              alt=""
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
        ))}
      </div>
    </section>
  );
};

export default SearchResult;
