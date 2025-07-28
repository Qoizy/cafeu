import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import testimonial from "../assets/testimonial";

const Testimonial = () => {
  const [startIndex, setStartIndex] = useState(2);
  const [touchStartX, setTouchStartX] = useState(null);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, testimonial.length - 2));
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;

    if (deltaX > 50) {
      handlePrev();
    } else if (deltaX < -50) {
      handleNext();
    }

    setTouchStartX(null);
  };

  const getCardStyle = (index) => {
    const distance = Math.abs(startIndex - index);
    if (distance > 2) return "hidden";

    if (distance === 2) return "opacity-20 scale-90";
    if (distance === 1) return "opacity-60 scale-95";
    return "opacity-100 scale-100";
  };

  return (
    <section className="bg-[#fef7ea] py-16 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wide mb-4">
          TESTIMONIAL
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          We Don't Like To Brag, But Our <br className="hidden md:block" /> Kind Of Love Us
        </h2>

        {/* <div className="relative"> */}
        <div
          className="flex justify-center items-center gap-4 overflow-hidden touch-pan-x"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {testimonial.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-sm border border-gray-200 transform transition duration-300 ${getCardStyle(
                index
              )} w-[85%] sm:w-[45%] md:w-[32%]`}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.title}</p>
              <div className="flex justify-center my-2 text-yellow-500">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-8">{item.message}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={handlePrev}
            disabled={startIndex <= 1}
            className={`p-2 rounded-full border hover:bg-black hover:text-white transition ${
              startIndex <= 1 ? "opacity-30 cursor-not-allowed" : ""
            }`}
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex >= testimonial.length - 2}
            className={`p-2 rounded-full border hover:bg-black hover:text-white transition ${
              startIndex >= testimonial.length - 2
                ? "opacity-30 cursor-not-allowed"
                : ""
            }`}
          >
            <FiChevronRight size={24} />
          </button>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Testimonial;
