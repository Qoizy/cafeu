import React from "react";
import { FiPlay } from "react-icons/fi";
import woman from "../assets/woman.jpeg";
import bbq from "../assets/BBQ-avocado.png";

const Hero = () => {
  return (
    <section className="bg-[#0b0c2a] text-white py-16 px-16 flex flex-col lg:flex-row items-center justify-between">
      <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
        <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-semibold">
          Best In Cafeu
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          BBQ Chicken <br className="hidden md:block" />
          <span className="text-red-600 underline decoration-2">
            Salad
          </span>{" "}
          with Creamy <br className="hidden md:block" /> Avocado
        </h1>
        <p className="text-gray-300 text-sm max-w-md mx-auto lg:mx-0">
          Tender grilled BBQ chicken sits atop a bed of crisp greens, sweet
          corn, and cherry tomatoes. Finished with a creamy avocado dressing for
          the perfect balance of smoky, fresh, and rich flavors.
        </p>
        <button className="bg-red-500 text-white px-6 py-3 rounded-md flex items-center space-x-2 mx-auto lg:mx-0 hover:bg-red-600">
          <span>Order Now</span>
          <FiPlay className="w-5 h-5" />
        </button>
        <div className="flex items-center justify-center lg:justify-start space-x-2 mt-4">
          <div className="flex -space-x-2 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                src={woman}
                alt="User"
                className="inline-block h-6 w-6 rounded-full"
              />
            ))}
          </div>
          <p className="text-sm">
            <span className="text-4xl">10k+</span> Review
          </p>
        </div>
      </div>

      <div className="hidden md:flex w-full lg:w-1/2 mt-10 lg:mt-5 justify-center relative">
        <div className="relative w-[300px] md:w-[350px] lg:w-[400px] aspect-square group transition-transform duration-500 hover:scale-105">
          {/* background halo effect */}
          <div className="absolute -inset-4 rounded-full bg-red-500 blur-3xl opacity-20 z-0" />

          {/* salad image */}
          <img
            src={bbq}
            alt="Salad"
            className="relative z-10 w-full h-full object-contain rounded-full shadow-xl"
          />

          {/* label */}
          <div className="absolute bottom-8 left-6 bg-white text-yellow-600 font-bold px-3 py-1 text-xs rounded-full shadow-lg z-20">
            50% OFF
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
