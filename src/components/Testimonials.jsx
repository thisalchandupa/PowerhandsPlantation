import { feedback } from "../constants";
import styles, { layout } from "../style";
import FeedbackCard from "./FeedbackCard";
import { newInvest, Invest } from "../assets";
import Button from "./Button";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    {/* Background Gradient */}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    {/* Investment Section */}
    <div className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better{" "}
          <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
            Investment
          </span>{" "}
          plan <br className="sm:block hidden" /> in a few easy steps.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Turn your money into more—fast! 🚀 Short-term investment, long-term gains!
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={newInvest} alt="investment" className="w-[100%] h-[100%]" />
      </div>
    </div>

    <div className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Build your{" "}
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-pink-300 bg-[200%_200%] animate-shimmer">
            Legacy
          </span>{" "}
          today.<br />invest wisely, prosper forever!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Turn your money into more—fast! 🚀 Short-term investment, long-term gains!
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={Invest} alt="investment" className="w-[100%] h-[100%]" />
      </div>
    </div>

    {/* Testimonials Section */}
    {/* <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div> */}
  </section>
);

export default Testimonials;
