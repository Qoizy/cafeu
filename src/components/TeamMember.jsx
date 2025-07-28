import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import teamMember from "../assets/teamMember";

const TeamMember = () => {
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const card = scrollContainer.current.querySelector("div");
      const cardWidth = card ? card.offsetWidth + 24 : 300;
      scrollContainer.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gray-200 py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Meet Our Team
          </h2>
          <p className="text-gray-500 max-w-xl">
            Dedicated executive with a strong background in strategy and
            operations. Committed to achieving organizational goals.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto overflow-hidden">
        {/* <div className="pointer-events-none absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-gray-250 via-gray-350/390 to-transparent z-10"></div> */}
        {/* <div className="pointer-events-none absolute top-0 left-0 w-12 h-full bg-gradient-to-l from-gray-250 via-gray-350/390 to-transparent z-10"></div> */}
        <div
          ref={scrollContainer}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {teamMember.map((member) => (
            <div
              key={member.id}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex-shrink-0 bg-white rounded-xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {member.name}
              </h3>
              <p className="text-primary text-sm mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
