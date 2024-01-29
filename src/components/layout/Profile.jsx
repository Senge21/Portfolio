import React from "react";
import Image from "next/image";
import pic from "../layout/portfolioImg/profileImg/Pic.png"
import vector from "./portfolioImg/profileImg/vector.png";
import git from "./portfolioImg/profileImg/git.png";
import figma from "./portfolioImg/profileImg/figma.png";
import twitter from "./portfolioImg/profileImg/twitter.png";

export const Profile = () => {
  return (
    <div className="sm- w-full  h-[360px] px-8 justify-center  items-start gap-12 inline-flex pt-8">
      <div className=" flex-col justify-center items-start gap-12 inline-flex ">
        <div className="self-stretch h-[152px] flex-col justify-center items-start gap-2 flex">
          <div className="text-gray-900 text-6xl font-bold font-['Inter'] leading-[72px]">
            Hi, I’m Sagar 👋
          </div>
          <div className="w-[768px] text-gray-600 text-base font-normal font-['Inter'] leading-normal flex">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </div>
        </div>
        <div className="w-[768px] h-14 flex-col justify-center items-start gap-2 inline-flex">
          <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="w-6 h-6 flex-col justify-center items-center inline-flex">
              <Image width={24} height={24} src={vector} alt="Vector" />
            </div>
            <div className="text-gray-600 text-base font-normal font-['Inter'] leading-normal">
              Ahmedabad, India
            </div>
          </div>
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="w-6 h-6 flex-col justify-center items-center inline-flex">
              <div className="w-2 h-2 relative bg-emerald-500 rounded-[20px]" />
            </div>
            <div className="text-gray-600 text-base font-normal font-['Inter'] leading-normal">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="w-[768px] h-9 flex-col justify-start items-start gap-4 inline-flex">
          <div className=" flex justify-start items-center gap-4 ">
            <Image width={24} height={24} src={git} alt="git" />
            <Image width={24} height={24} src={twitter} alt="twitter" />
            <Image width={24} height={24} src={figma} alt="figma" />
          </div>
        </div>
      </div>
      <div className="w-[400px] h-[360px] flex-col justify-center items-end inline-flex">
        <div className="w-80 h-[360px] relative">
          <div className="w-[280px] h-80 left-[40px] top-[40px] absolute bg-gray-200 border-8 border-white" />
          <Image src={pic} className="w-[280px] left-0 top-0 absolute  h-80   border-8 border-white" />
        </div>
      </div>
    </div>
  );
};
