import { card, Invest } from "../assets";
import styles, { layout } from "../style";
import InvestmentCalculator from "./calc";
 // Import the calculator component
import { useState } from "react";

const CardDeal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
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
          Turn your money into more—fast! 🚀 Short-term investment, long-term gains!
        </p>

        {/* Button that opens the calculator */}
        <button
          onClick={() => setModalOpen(true)}
          className="mt-10 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Open Investment Calculator
        </button>
      </div>

      <div className={layout.sectionImg}>
        <img src={Invest} alt="billing" className="w-[100%] h-[100%]" />
      </div>

      {/* Investment Calculator Modal */}
      {modalOpen && <InvestmentCalculator closeModal={() => setModalOpen(false)} />}
    </section>
  );
};

export default CardDeal;
