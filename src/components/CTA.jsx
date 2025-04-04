import React, { useState } from "react";
import styles from "../style";
import { airbnb, binance, bill } from "../assets";

const CTA = () => {
  const images = [airbnb, bill, binance];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      {/* Continuous Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <div
          className={`flex whitespace-nowrap ${isHovered ? "paused" : "scrolling"}`}
        >
          {/* Duplicate images for a seamless scroll */}
          {images.concat(images).map((img, index) => (
            <div
              key={index}
              className="relative w-[200px] sm:w-[300px] h-auto mx-4"
              onMouseEnter={() => setIsHovered(true)}  // Pause on hover
              onMouseLeave={() => setIsHovered(false)}  // Resume when hover ends
            >
              <img
                src={img}
                alt="Moving"
                className="w-full h-auto transform transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS for smooth scrolling and hover effects */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scrolling {
          animation: scroll 30s linear infinite;
        }

        .paused {
          animation-play-state: paused;
          transition: transform 0.3s ease-in-out; /* Smooth transition on hover */
        }

        .paused img {
          transform: scale(1.1);  /* Smoothly scale the image */
        }

      `}</style>
    </section>
  );
};

export default CTA;
