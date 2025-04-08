import React, { useState, useRef } from "react";
import styles from "../style";
import { v1, v2, v3 } from "../assets"; // Replace with your actual asset paths

const CTA = () => {
  const images = [v1, v2, v3];
  // Duplicate the array so the scroll is seamless
  const concatenatedImages = images.concat(images);
  // Track the index of the hovered image and its popup position
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [popupPos, setPopupPos] = useState({ top: 0, left: 0 });
  const sliderRef = useRef(null);
  const isPaused = hoveredIndex !== null;

  // Return the image source if an image is hovered
  const popupImage = hoveredIndex !== null ? concatenatedImages[hoveredIndex] : null;

  // Get the popup position on hover
  const handleMouseEnter = (index, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Use the element's midpoint horizontally, and position above it vertically.
    setPopupPos({ top: rect.top - 20, left: rect.left + rect.width / 2 });
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // Allow manual scrolling (for larger screens) via arrow buttons.
  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow relative`}
    >
      <div className="w-full relative">
        {/* Navigation arrows for manual scrolling on larger devices */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-50 p-2 bg-gray-800 bg-opacity-50 hover:bg-opacity-80 text-white rounded-full hidden sm:block"
          onClick={() => scrollSlider("left")}
        >
          &#8592;
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-50 p-2 bg-gray-800 bg-opacity-50 hover:bg-opacity-80 text-white rounded-full hidden sm:block"
          onClick={() => scrollSlider("right")}
        >
          &#8594;
        </button>

        {/* Scrolling Slider Container */}
        <div className="relative w-full overflow-hidden" ref={sliderRef}>
          <div className={`flex whitespace-nowrap ${isPaused ? "paused" : "scrolling"}`}>
            {concatenatedImages.map((img, index) => (
              <div
                key={index}
                className={`relative w-[300px] sm:w-[400px] md:w-[600px] h-auto mx-2 md:mx-4 overflow-visible transition-opacity duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== index ? "fade" : ""
                }`}
                onMouseEnter={(e) => handleMouseEnter(index, e)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={img}
                  alt="Moving"
                  className="w-full h-auto transform transition-transform duration-500 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Popup element for the hovered image */}
        {popupImage && (
          <div
            className="popup"
            style={{ top: popupPos.top, left: popupPos.left }}
            onMouseLeave={handleMouseLeave}
          >
            <img src={popupImage} alt="Popup Enlarged" />
          </div>
        )}
      </div>

      {/* CSS styles */}
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
        }
        /* Fade out non-hovered images */
        .fade {
          opacity: 0.2;
        }
        /* Popup styling and pop-out animation */
        .popup {
          position: fixed;
          /* The position is set dynamically via inline style */
          transform: translate(-50%, -100%);
          z-index: 100;
          animation: popOut 0.4s ease-out forwards;
          pointer-events: none; /* Ensures the popup does not interfere with hover */
        }
        @keyframes popOut {
          from {
            transform: translate(-50%, -120%) scale(0.8);
            opacity: 0;
          }
          to {
            transform: translate(-50%, -100%) scale(1);
            opacity: 1;
          }
        }
        .popup img {
          max-width: 700px;
          width: auto;
          height: auto;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          border-radius: 8px;
        }
        /* Responsive adjustments for smaller devices */
        @media screen and (max-width: 640px) {
          .popup {
            /* Adjust the popup's position for small viewports */
            transform: translate(-50%, -110%);
          }
          .popup img {
            max-width: 90vw;
          }
          /* Adjust slider container widths on mobile */
          div[class*="w-["] {
            width: 90vw !important;
          }
          /* Hide navigation arrows on small screens */
          button {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;
