import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex flex-col sm:flex-row justify-between items-center w-full sm:mb-20 mb-6 gap-6`}
  >
    {stats.map((stat) => (
      <div
        key={stat.id}
        className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left min-w-[150px]"
      >
        <h4 className="font-poppins font-semibold text-white text-[30px] sm:text-[40px] leading-[43px] sm:leading-[53px]">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal text-gradient text-[15px] sm:text-[20px] leading-[22px] sm:leading-[26px] uppercase whitespace-nowrap">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
