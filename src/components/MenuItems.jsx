import React, { useRef, useState } from "react";
import {
  FaPizzaSlice,
  FaDrumstickBite,
  FaHamburger,
  FaLeaf,
} from "react-icons/fa";
import { MdLocalDrink } from "react-icons/md";
import { BsGridFill } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import menuItems from "../assets/menuitems";

const categories = [
  { name: "All", icons: <BsGridFill /> },
  { name: "Pizza", icons: <FaPizzaSlice /> },
  { name: "Salad", icons: <FaLeaf /> },
  { name: "Drinks", icons: <MdLocalDrink /> },
  { name: "Burger", icons: <FaHamburger /> },
  { name: "Chicken", icons: <FaDrumstickBite /> },
];

const MenuItems = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 200;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="w-full px-4 py-8 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-8">
        <h4 className="bg-black inline-block rounded-full px-3 py-1 text-sm text-white mb-6 tracking-wide">
          Specials Menu
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Our Specials Menu
        </h2>
      </div>

      <div className="relative mb-10">
        <div className="absolute -top-8 right-2 z-10 flex gap-2 lg:hidden">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-black text-white hover:bg-gray-700"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-black text-white hover:bg-gray-700"
          >
            <FaChevronRight />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto justify-start lg:justify-center lg:overflow-x-visible lg:flex-wrap scroll-smooth scrollbar-hide py-4 px-1"
        >
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`flex-shrink-0 flex flex-col items-center justify-center gap-2 px-12 py-8 rounded-xl shadow-md transition-colors 
              ${
                selectedCategory === cat.name
                  ? "bg-primary text-black"
                  : "bg-white text-gray-700 hover:bg-primary/10"
              }`}
              onClick={() => setSelectedCategory(cat.name)}
            >
              <span className="text-lg mb-4">{cat.icons}</span>
              <span className="text-sm font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-200 rounded-xl shadow hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="relative p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-xl"
              />
              <span className="absolute top-6 left-4 bg-red-600 text-white px-3 py-1 text-xs rounded-tr-[30px] rounded-br-[30px]">
                ${item.price.toFixed(2)}
              </span>
              <span className="absolute top-6 right-4 bg-red-600 px-3 py-1 text-xs rounded-tl-[30px] rounded-bl-[30px] hover:bg-gray-200">
                🛒
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm my-2">{item.description}</p>
              <div className="flex items-center justify-between text-sm mt-6">
                <span className="text-gray-600">
                  Delivery fee:{" "}
                  <span className="font-medium">${item.deliveryFee}</span>
                </span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                    ❤️
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                    🛒
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuItems;
