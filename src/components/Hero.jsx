import styles from "../style";
import { discount, robot, vanilla } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
          <h1 className="font-poppins font-semibold text-[52px] sm:text-[68px] leading-[65px] sm:leading-[85px] text-white text-center sm:text-left w-full">
            Invest in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Vanilla
            </span>{" "}
            <br />
            For Success.
          </h1>


          <div className="mt-6 sm:mt-0 sm:flex hidden md:mr-4 mr-0">
            {/* <GetStarted /> */}
          </div>
        </div>

        {/* <h1 className="font-poppins font-semibold text-[52px] sm:text-[68px] leading-[75px] sm:leading-[100.8px] text-white w-full text-center sm:text-left mt-4">
          For Success.
        </h1> */}


        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center sm:text-left`}>
          Power Hands Plantation (PVT) Ltd. was founded with the mission of creating a greener
          future by offering eco-friendly investment opportunities in Sri Lanka.
          Our vision is to enhance the country’s trading and export sectors while promoting
          environmental sustainability and achieving high financial returns for our investors, ensuring zero harm to the environment
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={vanilla} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        {/* <GetStarted /> */}
      </div>
    </section>
  );
};

export default Hero;
