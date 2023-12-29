import React from "react";
import { getShoes } from "../firebase-config";
import { Link, useLoaderData, useSearchParams,defer , Await,  } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import styles from "../style";
import Button from "../Constant/Button";



interface ShoeProps {
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

export async function loader() {
  return defer({ shoes: getShoes() });
}

 const Shoe = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const shoesParams = useLoaderData() as { shoes: ShoeProps[] }; 
   const companyFilter = searchParams.get("company");
  

 const renderShoeElement = (allShoes: ShoeProps []) => {
   const filteredShoes = companyFilter
     ? allShoes.filter((shoe) => shoe.company === companyFilter)
     : allShoes;

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
     <>
       <div className={`flex items-center flex-wrap gap-4 p-4`}>
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

       <div className="flex items-center sm:justify-start justify-center  flex-wrap mt-3">
         {filteredShoes.map((data, id) => (
           <Link
             key={id}
             to={data.id}
             state={{ type: companyFilter, search: `?${searchParams}` }}
           >
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
           </Link>
         ))}
       </div>
     </>
   );
 };


   return (
     <section className={`${styles.paddingX} ${styles.paddingY}`}>
       <h3 className={`${styles.heading3} uppercase text-gradient ml-4`}>
         Explore our shoe options
       </h3>
       <React.Suspense fallback={<h2 className={`${styles.heading3} ml-[20px]`}>Loading Shoes...</h2>}>
         <Await resolve={shoesParams.shoes}>{renderShoeElement}</Await>
       </React.Suspense>
     </section>
   );
 };

export default Shoe;
