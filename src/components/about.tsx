"use client";
import { memo } from "react";
import "../styles/about.css";
import { motion } from "framer-motion";

const About = memo(function About() {
  return (
    <div className="bg-container mt-12">
      <div className="bg-image  w-full h-36 rounded-2xl flex justify-around items-center ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: -70 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[24px] lg:text-[48px] text-white font-[900]">
            Play
          </h1>
          <p className="lg:text-[24px] font-[400] text-white mt-0 text-center">
            Anytime
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 170 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className=" text-[24px] lg:text-[48px] text-white font-[900]">
            Trade
          </h1>
          <p className="lg:text-[24px] font-[400] text-white mt-0 text-center">
            Anytime
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 170 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className=" text-[24px] lg:text-[48px] text-white font-[900]">
            Earn
          </h1>
          <p className="lg:text-[24px] font-[400] text-white mt-0 text-center">
            Every Win
          </p>
        </motion.div>
      </div>
    </div>
  );
});
export default About;
