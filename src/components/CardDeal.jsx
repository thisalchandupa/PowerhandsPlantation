import { card, Invest } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Unlock the{" "}
        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
          Privilege
        </span>{" "}
        of smarter investment.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Turn your money into more—fast! 🚀 Short-term investment, long-term gains!.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={Invest} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
