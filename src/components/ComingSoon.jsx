import React, { useState, useEffect } from "react";
import chickenpizza from "../assets/chickenpizza.png";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#0A0E27] text-white py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex flex-1 justify-center">
        <img
          src={chickenpizza}
          alt="Spicy Chicken Pizza"
          className="w-[500px] md:w-[900px] lg:w-[1200px] animate-pulse"
        />
      </div>

      <div className="flex-1 text-center md:text-left">
        <p className="text-sm text-gray-400 mb-2">Coming Soon</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-4">
          Spicy Chicken <br />{" "}
          <span className="text-orange-400">Pizza Food</span>{" "}
        </h2>
        <p className="text-gray-300 mb-6">
          Feel hungry? Order your favorite food.
        </p>

        <div className="flex justify-center md:justify-start gap-6 text-center mb-6">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label}>
              <p className="text-3xl md:text-4xl font-bold">
                {value < 10 ? `0${value}` : value}
              </p>
              <span className="text-gray-400 text-sm capitalize">{label}</span>
            </div>
          ))}
        </div>

        <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default ComingSoon;
