import styles, { layout } from '../style';
import { hero } from '../assets';


const Home = () => {
  return (
    <>
      <section
        className={`${layout.section} ${styles.marginX} `}
      >
        <div
          className={`${styles.flexStart} flex-col flex-1 sm:mr-[30px] mr-[0] mb-[50px] sm:mb-[0] `}
        >
          <h1 className="text-[52px] leading-[45px] ss:text-[72] ss:leading-[50px] font-extrabold text-gradient font-cormorant">
            Next Generation <br className="hidden md:block" /> Tech Booster{" "}
          </h1>
          <p className={`${styles.paragraph} sm:my-[20px] my-[15px]`}>
            #50000scholarships powered by Vista.
          </p>
          <p className={`${styles.paragraph}  mb-[30px] md:max-w-[500px]`}>
            Vista and Duravolt have joined forces to grant scholarships,
            enabling learners to acquire valuable skills that can unlock new
            career prospects in lucrative areas such as artificial intelligence,
            cybersecurity, or project management
          </p>
          <button className="bg-primary text-[18px] py-[14px] px-[25px] text-white border-none outline-none font-semibold leading-[20px] rounded-[8px] font-cormorant sm:w-[12rem] w-[100%]">
            Get Started <span>&rarr;</span>
          </button>
        </div>

        <div className={`${styles.flexCenter}`}>
          <img
            src={hero}
            alt="banner image"
            className=" sm:h-[400px] w-[full] h-[auto] rounded-[12px]"
          />
        </div>
      </section>

      <section>
        
      </section>
    </>
  );
}

export default Home;
