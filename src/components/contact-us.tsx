"use client";
import { memo } from "react";
import "../styles/about.css";
import { motion } from "framer-motion";

const ContactUs = memo(function ContactUs() {
  return (
    <div className=" flex flex-col-reverse  lg:flex-row gap-x-12 px-4 lg:px-16 py-8 contact mt-4 rounded-[40px]  bg-[#2E2D2E]  border-2 border-[#424142]">
      <div className="flex flex-col w-full lg:w-1/2">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5, x: -170 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl font-bold text-white mb-3"
        >
          Contact Us
        </motion.h1>
        <div className="flex flex-col gap-y-4 mt-4 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -170 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="sm:flex items-center justify-between  gap-x-4 w-full"
          >
            <div className="flex flex-col gap-y-1 text-white w-full sm:w-[48%]">
              <h1 className="text- font-semibold">First Name:</h1>
              <input
                className="text-xl rounded-md  px-4 bg-black border-white border-2 outline-none py-2 shadow-md shadow-white"
                placeholder="first Name"
              />
            </div>
            <div className="flex flex-col gap-y-1 text-white w-full sm:w-[48%]">
              <h1 className="text- font-semibold">Last Name:</h1>
              <input
                className="text-xl rounded-md  px-4 bg-black border-white border-2 outline-none py-2 shadow-md shadow-white"
                placeholder="last Name"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -170 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col gap-y-1 text-white w-full"
          >
            <h1 className="text- font-semibold">Email:</h1>
            <input
              placeholder="email here"
              className="text-xl w-full rounded-md  px-4 bg-black border-white border-2 outline-none py-2 shadow-md shadow-white"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -170 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="flex flex-col gap-y-1 text-white w-full"
          >
            <h1 className="text- font-semibold">Phone number:</h1>
            <input
              placeholder="phone number"
              className="text-xl w-full rounded-md  px-4 bg-black border-white border-2 outline-none py-2 shadow-md shadow-white"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -170 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1.3 }}
            className="flex flex-col gap-y-1 text-white w-full"
          >
            <h1 className="text- font-semibold">Message:</h1>
            <textarea
              placeholder="writer message"
              className="text-xl h-[8rem] w-full rounded-md  px-4 bg-black border-white border-2 outline-none py-2 shadow-md shadow-white"
            />
          </motion.div>
          <div className="flex items-center gap-x-2">
            <input type="checkbox" />
            <p className="text-white">
              You agree to our friendly privacy policy.
            </p>
          </div>
          <div className="">
            <button
              type="button"
              className="bg-[#BF08DE] w-[90%] mx-2 py-3 mt-5 rounded-[18px] text-[12px] text-white"
            >
              Send message
            </button>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 170 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.5 }}
        className=" w-full lg:w-1/2 flex items-end gap-y-2"
      >
        <p className="mb-1 text-white">
          Step into a world where art meets blockchain technology. Our exclusive
          collection of non-fungible tokens (NFTs) showcases some of the most
          unique and stunning works of digital art from talented artists around
          the world. Each NFT is a one-of-a-kind creation, verified on the
          blockchain, and is sure to capture the attention of any collector or
          art enthusiast.
        </p>
      </motion.div>
    </div>
  );
});

export default ContactUs;
