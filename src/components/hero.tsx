"use client";
import Image from "next/image";
import { memo } from "react";
import { motion } from "framer-motion";

const Hero = memo(function Hero() {
  return (
    <div className="h-[90vh] relative text-white">
      <div>
        <Image
          width={500}
          height={200}
          alt="logo"
          className="h-full w-full z-10 rounded-[20px] md:rounded-[50px] shadow-md shadow-[#424242] absolute top-6 left-0"
          src="/assets/Images/hero.png"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 170 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center w-full items-center pt-24"
      >
        <Image
          width={500}
          height={100}
          alt="hero logo"
          src="/assets/Images/heroLogo.png"
          className="z-[99] w-1/2 h-full "
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: -170 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="z-[999] absolute w-full mt-6  lg:mt-0 lg:w-1/2 px-12 text-white"
      >
        <p className="">
          Bayra is a multi-purpose platform revolutionizing the NFT space by
          combining NFTs, DeFi, and gaming in one place. Bayra is home to the
          CrypFennecs NFT project and will also host other NFT projects such as
          Blops and Pixel Heroes. The platform will offer a
        </p>
        <button
          type="button"
          className="bg-button h-[39px] mt-4 w-[175.48px] rounded-[6px] font-[400] text-[16px] text-white"
        >
          Learn more
        </button>
      </motion.div>
    </div>
  );
});

export default Hero;
