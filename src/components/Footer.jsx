import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:flex-wrap justify-between gap-x-6 gap-y-10">
        <div className="max-w-sm flex-1 min-w-[220px] text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 -mb-6">
            <img src={logo} alt="Cafeu Logo" className=" w-[100px]" />
          </div>
          <p className="text-sm text-gray-400">
            Welcome to a place of refinement and work. This is Frify, we make
            your team better.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-between">
          <div className="max-w-sm flex-1 min-w-[150px]">
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
            </ul>
          </div>

          <div className="max-w-sm flex-1 min-w-[150px]">
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
            </ul>
          </div>

          <div className="max-w-sm flex-1 min-w-[150px]">
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Partner Program</a>
              </li>
              <li>
                <a href="#">What is SaaS?</a>
              </li>
              <li>
                <a href="#">SaaS Comparison</a>
              </li>
            </ul>
          </div>

          <div className="max-w-sm flex-1 min-w-[150px]">
            <h3 className="font-semibold mb-3">Social</h3>
            <div className="flex md:flex-col gap-4 text-gray-400">
              <a href="#">
                <FiFacebook size={20} />
              </a>
              <a href="#">
                <FiTwitter size={20} />
              </a>
              <a href="#">
                <FiInstagram size={20} />
              </a>
              <a href="#">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="relative max-w-sm flex-1 min-w-[250px] col-span-2 xl:col-span-1 md:self-start md:ml-auto">
          <h3 className="font-semibold mb-2 text-white">Subscribe now</h3>
          <h4 className="text-white font-semibold text-lg mb-2">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">
            Don’t wait—take the first step today! Whether you're ready to make a
            change, start something new, or reach the next level, now is the
            perfect time to act.
          </p>
          <div className="flex flex-col md:flex-row items-stretch bg-white relative rounded-lg overflow-hidden w-full mt-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 text-black text-sm outline-none"
            />
            <button className="absolute -right-1 top-1/2 -translate-y-1/2 bg-red-500 p-4 text-white rounded-md md:static md:translate-y-0 md:rounded-lg">
              <FiSend size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-white-500 border-t mt-6 border-gray-700 pt-6">
        © {new Date().getFullYear()} CAFEU. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
