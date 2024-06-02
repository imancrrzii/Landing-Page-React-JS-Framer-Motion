/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function Banner({ banner, heading, subHeading, btn1, btn2 }) {
  return (
    <div className="gradient-background rounded-xl rounded-br-[80px] md:p-9 px-4 py-9 ">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img src={banner} alt="" className="lg:h-[386px]" />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-3/5"
        >
          <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
            {heading}
          </h2>
          <p className="text-[#EBEBEB] text-2xl mb-8 ">{subHeading}</p>
          <div className="space-x-3 space-y-4">
            <button className="btn-primary rounded-xl">{btn1}</button>
            <button className="btn-primary rounded-xl">{btn2}</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
