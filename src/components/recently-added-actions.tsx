"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { memo } from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsFillSunriseFill } from "react-icons/bs";
import { gameData } from "./add-game";

const RecentlyAddedActions = memo(function RecentlyAddedActions() {
  const responsive = {
    superbLargeDesktop: {
      breakpoint: { max: 3000, min: 1236 },
      items: 3,
      partialVisibilityGutter: 20,
    },
    superLargeDesktop: {
      breakpoint: { max: 1236, min: 1024 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 768, min: 600 },
      items: 1,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };

  return (
    <div className="bg-[#2E2D2E] border-2 border-[#424142] mt-4 rounded-[40px] pb-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: -170 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white flex items-center justify-between font-Poppins text-2xl sm:text-[41.335px]  font-normal leading-normal my-4 px-4 sm:px-12 pt-6"
      >
        Recently Actions
        <BsArrowRight />
      </motion.div>
      <div className=" sm:px-12 mt-12">
        <Carousel responsive={responsive}>
          {gameData.map((it) => {
            return (
              <div key={it.id}>
                <div className="slider-img h-[400px] relative w-[316px]  overflow-hidden">
                  <div className="card-image  h-[280px] flex items-center justify-center mb-">
                    <div className="w-[250px] h-[200px]  under-card flex justify-center "></div>
                  </div>
                  <div className="p-2 flex flex-col ">
                    <h1 className="text-center">Lorem Ispum</h1>
                    <p className="text-center">Owner: Lorem Ipsum</p>
                    <p className="text-center">850000 XUSD</p>
                  </div>
                  <div className="absolute text-2xl text-black right-2 top-2 flex justify-center items-center bg-white w-[60px] h-[60px] rounded-full m-auto ">
                    <h1 className="flex items-stretch justify-center text-4xl  ">
                      <BsFillSunriseFill />
                    </h1>
                  </div>
                </div>
                <div className="flex items-center justify-center mr-12">
                  <button
                    type="button"
                    className="bg-[#BF08DE] w-[80%]  h-[45px]  rounded-[14px] text-[12px] mt-4"
                  >
                    Read more
                  </button>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
});

export default RecentlyAddedActions;
