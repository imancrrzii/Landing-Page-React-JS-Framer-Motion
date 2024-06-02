/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/images/8.png";
import footer1 from "../assets/images/20.png";
import footer2 from "../assets/images/21.png";
import footer3 from "../assets/images/22.png";
import footer4 from "../assets/images/23.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="my-12 flex flex-col md:flex-row gap-10"
      >
        <div className="md:w-1/2 space-y-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3 text-primary"
          >
            <img className="w-10 inline-block items-center" src={logo} alt="" />
            <span className="text-white">CarraTzy</span>
          </a>
          <p className="md:w-1/2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            laboriosam voluptates vitae
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Type your email"
              className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="py-2 px-4 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary transition-all duration-300"
            />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                Overview
              </a>
              <a href="/" className="block hover:text-gray-300">
                Features
              </a>
              <a href="/" className="block hover:text-gray-300">
                About
              </a>
              <a href="/" className="block hover:text-gray-300">
                Pricing
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Help</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                Fakc
              </a>
              <a href="/" className="block hover:text-gray-300">
                Real
              </a>
              <a href="/" className="block hover:text-gray-300">
                Job
              </a>
              <a href="/" className="block hover:text-gray-300">
                Sokin
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Contact</h4>
            <ul className="space-y-3">
              <p className="hover:text-gray-300">Bacot</p>
              <p className="hover:text-gray-300">Mangea</p>
              <p className="hover:text-gray-300">Emang iya</p>
              <p className="hover:text-gray-300">045544518</p>
            </ul>
          </div>
        </div>
      </motion.div>

      <hr />

      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8 "
      >
        <p>Lorem ipsum dolor sit amet. All right reserved.</p>
        <div className="flex items-center space-x-5">
          <img
            src={footer1}
            alt=""
            className="w-10 h-10 cursor-pointer hover: -translate-y-4 transition-all duration-300 "
          />
          <img
            src={footer2}
            alt=""
            className="w-10 h-10 cursor-pointer hover: -translate-y-4 transition-all duration-300"
          />
          <img
            src={footer3}
            alt=""
            className="w-10 h-10 cursor-pointer hover: -translate-y-4 transition-all duration-300"
          />
          <img
            src={footer4}
            alt=""
            className="w-10 h-10 cursor-pointer hover: -translate-y-4 transition-all duration-300"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
