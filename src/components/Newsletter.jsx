import React from "react";
import { FiSend } from "react-icons/fi";
import { FaUtensils, FaCalendarCheck } from "react-icons/fa";
import chef from "../assets/chef-1.png";
import chicken from "../assets/chicken-salad.png";
import coleslaw2 from "../assets/coleslaw-2.png";
import family from "../assets/family.png";

const Newsletter = () => {
  return (
    <section className="relative bg-[#f8f7f5] py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-xl mx-auto -mt-36 z-10 relative">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Stay Informed About Special Offers
          </h2>
          <p className="text-gray-600 text-sm mt-2 mb-6 px-2 sm:px-0">
            Staying informed about special offers is a great way to maximize
            your savings and take advantage of limited-time deals.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[500px] mx-auto">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="px-4 py-2 w-full sm:w-auto max-w-[300px] flex-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              <FiSend className="w-5 h-5" />
            </button>
          </form>
        </div>

        <div className="mt-20 grid grid-col-1 md:grid-cols-2 gap-10 items-center w-full h-full">
          <div className="grid sm:grid-col-2 grid-cols-2 gap-4 w-full h-full">
            <img
              src={chef}
              alt="Chef"
              className="object-cover w-full h-44 sm:h-36 rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[50px]"
            />
            <img
              src={chicken}
              alt="Chicken"
              className="object-cover w-full h-44 sm:h-36 rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px]"
            />
            <img
              src={coleslaw2}
              alt="Salad"
              className="object-cover w-full h-44 sm:h-36 rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px]"
            />
            <img
              src={family}
              alt="Family"
              className="object-cover w-full h-44 sm:h-36 rounded-tr-[50px] rounded-bl-[50px] rounded-br-[50px]"
            />
          </div>

          <div>
            <div className="text-center md:text-start">
              <span className="inline-block bg-black text-white text-xs px-3 py-1 rounded-full mb-3">
                About
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Why We Are The Best
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              ZenPhilosophy and Approach. Quis autem vel eum iure reprehenderit
              qui in ea voluptate velit esse quam nihil molestiae consequatur.
            </p>

            <div className="space-y-6 mb-6">
              <div className="flex items-start space-x-4">
                <FaUtensils className="text-black-500 w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Buffet Service
                  </h4>
                  <p className="text-sm text-gray-600">
                    Quia eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaCalendarCheck className="text-black-500 w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Online Booking
                  </h4>
                  <p className="text-sm text-gray-600">
                    Quia eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto.
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 text-sm">
              About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
