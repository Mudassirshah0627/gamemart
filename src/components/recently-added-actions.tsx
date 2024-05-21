"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { memo } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const RecentlyAddedActions = memo(function RecentlyAddedActions() {
  const responsive = {
    superbLargeDesktop: {
      breakpoint: { max: 3000, min: 1236 },
      items: 4,
      partialVisibilityGutter: 20,
    },
    superLargeDesktop: {
      breakpoint: { max: 1236, min: 1024 },
      items: 4,
      partialVisibilityGutter: 20,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 768, min: 600 },
      items: 2,
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
        className="text-white flex items-center justify-between font-Poppins text-2xl sm:text-[41.335px]  font-normal leading-normal my-4 pb- px-12 pt-6"
      >
        Recently Actions
        <BsArrowRight />
      </motion.div>
      <div className="px-4 sm:px-12 mt-12">
        <Carousel responsive={responsive}>
          <div className="bg-blue-600 border-t-2 shadow-blue-600 border-t-blue-600  shadow-md  rounded-md  mx-2 overflow-hidden  text-white rounded-tr-[40px] ">
            <Image
              src="/assets/Images/slide.jpg"
              width={195}
              height={254}
              className="rounded-lg w-full h-full px-[1px]"
              alt="Old City Travel"
            />
            <div className="p-2 flex flex-col">
              <h1 className="text-center">Lorem Ispum</h1>
              <p className="text-center">Owner: Lorem Ipsum</p>
              <p className="text-center">850000 XUSD</p>
            </div>
          </div>
          <div className="bg-blue-600 border-t-2 shadow-blue-600 border-t-blue-600  shadow-md  rounded-md  mx-2 overflow-hidden  text-white rounded-tr-[40px] ">
            <Image
              src="/assets/Images/slide.jpg"
              width={195}
              height={254}
              className="rounded-lg w-full h-full px-[1px]"
              alt="Old City Travel"
            />
            <div className="p-2 flex flex-col">
              <h1 className="text-center">Lorem Ispum</h1>
              <p className="text-center">Owner: Lorem Ipsum</p>
              <p className="text-center">850000 XUSD</p>
            </div>
          </div>
          <div className="bg-blue-600 border-t-2 shadow-blue-600 border-t-blue-600  shadow-md  rounded-md  mx-2 overflow-hidden  text-white rounded-tr-[40px] ">
            <Image
              src="/assets/Images/slide.jpg"
              width={195}
              height={254}
              className="rounded-lg w-full h-full px-[1px]"
              alt="Old City Travel"
            />
            <div className="p-2 flex flex-col">
              <h1 className="text-center">Lorem Ispum</h1>
              <p className="text-center">Owner: Lorem Ipsum</p>
              <p className="text-center">850000 XUSD</p>
            </div>
          </div>
          <div className="bg-blue-600 border-t-2 shadow-blue-600 border-t-blue-600  shadow-md  rounded-md  mx-2 overflow-hidden  text-white rounded-tr-[40px] ">
            <Image
              src="/assets/Images/slide.jpg"
              width={195}
              height={254}
              className="rounded-lg w-full h-full px-[1px]"
              alt="Old City Travel"
            />
            <div className="p-2 flex flex-col">
              <h1 className="text-center">Lorem Ispum</h1>
              <p className="text-center">Owner: Lorem Ipsum</p>
              <p className="text-center">850000 XUSD</p>
            </div>
          </div>

          <div className="bg-blue-600 border-t-2 shadow-blue-600 border-t-blue-600  shadow-md  rounded-md  mx-2 overflow-hidden  text-white rounded-tr-[40px] ">
            <Image
              src="/assets/Images/slide.jpg"
              width={195}
              height={254}
              className="rounded-lg w-full h-full px-[1px]"
              alt="Old City Travel"
            />
            <div className="p-2 flex flex-col">
              <h1 className="text-center">Lorem Ispum</h1>
              <p className="text-center">Owner: Lorem Ipsum</p>
              <p className="text-center">850000 XUSD</p>
            </div>
          </div>
          <div className="bg-blue-600 border-t-2 shadow-blue-600 border-t-blue-600  shadow-md  rounded-md  mx-2 overflow-hidden  text-white rounded-tr-[40px] ">
            <Image
              src="/assets/Images/slide.jpg"
              width={195}
              height={254}
              className="rounded-lg w-full h-full px-[1px]"
              alt="Old City Travel"
            />
            <div className="p-2 flex flex-col">
              <h1 className="text-center">Lorem Ispum</h1>
              <p className="text-center">Owner: Lorem Ipsum</p>
              <p className="text-center">850000 XUSD</p>
            </div>
          </div>
          <div className="bg-blue-600 border-t-2 shadow-blue-600 border-t-blue-600  shadow-md  rounded-md  mx-2 overflow-hidden  text-white rounded-tr-[40px] ">
            <Image
              src="/assets/Images/slide.jpg"
              width={195}
              height={254}
              className="rounded-lg w-full h-full px-[1px]"
              alt="Old City Travel"
            />
            <div className="p-2 flex flex-col">
              <h1 className="text-center">Lorem Ispum</h1>
              <p className="text-center">Owner: Lorem Ipsum</p>
              <p className="text-center">850000 XUSD</p>
            </div>
          </div>
          <div className="bg-blue-600 border-t-2 shadow-blue-600 border-t-blue-600  shadow-md  rounded-md  mx-2 overflow-hidden  text-white rounded-tr-[40px] ">
            <Image
              src="/assets/Images/slide.jpg"
              width={195}
              height={254}
              className="rounded-lg w-full h-full px-[1px]"
              alt="Old City Travel"
            />
            <div className="p-2 flex flex-col">
              <h1 className="text-center">Lorem Ispum</h1>
              <p className="text-center">Owner: Lorem Ipsum</p>
              <p className="text-center">850000 XUSD</p>
            </div>
          </div>
          <div className="bg-blue-600 border-t-2 shadow-blue-600 border-t-blue-600  shadow-md  rounded-md  mx-2 overflow-hidden  text-white rounded-tr-[40px] ">
            <Image
              src="/assets/Images/slide.jpg"
              width={195}
              height={254}
              className="rounded-lg w-full h-full px-[1px]"
              alt="Old City Travel"
            />
            <div className="p-2 flex flex-col">
              <h1 className="text-center">Lorem Ispum</h1>
              <p className="text-center">Owner: Lorem Ipsum</p>
              <p className="text-center">850000 XUSD</p>
            </div>
          </div>

          <div className="bg-blue-600 border-t-2 shadow-blue-600 border-t-blue-600  shadow-md  rounded-md  mx-2 overflow-hidden  text-white rounded-tr-[40px] ">
            <Image
              src="/assets/Images/slide.jpg"
              width={195}
              height={254}
              className="rounded-lg w-full h-full px-[1px]"
              alt="Old City Travel"
            />
            <div className="p-2 flex flex-col">
              <h1 className="text-center">Lorem Ispum</h1>
              <p className="text-center">Owner: Lorem Ipsum</p>
              <p className="text-center">850000 XUSD</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
});

export default RecentlyAddedActions;
