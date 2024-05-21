"use client";
import { memo } from "react";
import Cards from "./card";
import { motion } from "framer-motion";

const AptechMedia = memo(function AptechMedia() {
  return (
    <div className="mt-6 rounded-lg">
      <div className="  ">
        <div className="bg-[#2E2D2E] p-8 rounded-3xl">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5, x: -170 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="text-white text-2xl font-bold"
          >
            AptechMedia
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 70 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-[#7B7B7B] py-4"
          >
            We are committed to providing our customers with exceptional service
            while offering our employees the best training. We are committed to
            providing our customers with exceptional service while offering our
            employees the best training. We are committed to providing our
            customers with exceptional service while offering our employees the
            best training.
          </motion.div>
          <Cards />
        </div>
      </div>
    </div>
  );
});

export default AptechMedia;
