import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import news from "../assets/news";

const LatestNews = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateView = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerView(1);
      else if (width < 768) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, news.length - cardsPerView));
  };

  const visibleNews = news.slice(startIndex, startIndex + cardsPerView);
  return (
    <section className="bg-[#f7f7f7] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Latest News</h2>
            <p className="text-gray-500 text-sm max-w-md">
              Dedicated executive with a strong background in strategy and
              operations. Committed to achieving organizational goals.
            </p>
          </div>

          <div className="flex gap-3 text-gray-600">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`p-2 rounded-full border hover:bg-black hover:text-white transition ${
                startIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
              }`}
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + cardsPerView >= news.length}
              className={`p-2 rounded-full border hover:bg-black hover:text-white transition ${
                startIndex + cardsPerView >= news.length
                  ? "opacity-30 cursor-not-allowed"
                  : ""
              }`}
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-300">
          {visibleNews.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-3 shadow-sm overflow-hidden border"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 rounded-xl object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 mb-2">
                  {item.date} · {item.meta}
                </p>
                <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                <button className="text-blue-600 hover:underline text-sm font-medium">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
