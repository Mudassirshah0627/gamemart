import Image from "next/image";
import { memo } from "react";

const Social = memo(function Social() {
  return (
    <div className=" bg-primary w-full border-2 border-gray-600  rounded-[30px] mt-4 py-12">
      <h1 className="text-2xl md:text-4xl text-center py-8">
        A WORLDWIDE REVOLUTION IN GAMING
      </h1>

      <div className="grid md:grid-cols-2 gap-7 lg:grid-cols-3 w-full  sm:px-24 justify-center">
        <div className=" w-full mt-4">
          <Image
            width={300}
            height={150}
            alt="social logo"
            src="/assets/Images/Grupo-144@2x 1.png"
          />
        </div>
        <div className=" w-full ">
          <Image
            width={300}
            height={150}
            alt="social logo"
            src="/assets/Images/net (1).png"
          />
        </div>

        <div className=" w-full ">
          <Image
            width={300}
            height={150}
            alt="social logo"
            src="/assets/Images/net (3).png"
          />
        </div>
        <div className=" w-full ">
          <Image
            width={300}
            height={150}
            alt="social logo"
            src="/assets/Images/net (2).png"
          />
        </div>
        <div className=" w-full ">
          <Image
            width={300}
            height={150}
            alt="social logo"
            src="/assets/Images/net (5).png"
          />
        </div>
        <div className=" w-full ">
          <Image
            width={300}
            height={150}
            alt="social logo"
            src="/assets/Images/net (6).png"
          />
        </div>
      </div>
    </div>
  );
});
export default Social;
