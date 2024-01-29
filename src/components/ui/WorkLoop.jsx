import React from "react";
import Image from "next/image";
import ButtonImg from "./workImg/Button.png";
import Picture from "./workImg/Picture.png";
const workButton = [
  "React",
  "Next.js",
  "Typescript",
  "Nest.js",
  "PostgreSQL",
  "Tailwindcss",
  "Figma",
  "Cypress",
  "Storybook",
  "Git",
];

export const WorkLoop = () => {
  return (
    <>
      <div className="w-[576px] h-[480px] grow shrink basis-0  p-12 rounded-tl-xl rounded-bl-xl flex-col justify-start items-center gap-6 inline-flex">
        <div className=" text-gray-900 text-xl font-semibold font-['Inter'] leading-7">
          Fiskil
        </div>
        <div className=" text-gray-600 text-base font-normal font-['Inter'] leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </div>

        <div className="w-[480px] flex-wrap  justify-start items-center gap-[8px] inline-flex">
          {workButton.map((el, i) => (
            <div
              key={i}
              className="  px-5 py-1 bg-gray-200 rounded-xl justify-center items-center flex"
            >
              <div className="text-gray-600 text-sm font-medium font-['Inter'] leading-tight">
                {el}
              </div>
            </div>
          ))}
        </div>
        <div className=" justify-start items-center gap-3 inline-flex">
          <div className="p-1.5 rounded-lg justify-center items-center flex">
            <Image src={ButtonImg} alt="Button" width={36} height={36} />
          </div>
        </div>
      </div>
    </>
  );
};

export const PictureLoop = () => {
  return (
    <div className="grow shrink basis-0 p-12 bg-gray-50 rounded-tl-xl rounded-bl-xl border-r border-gray-100 justify-center items-center flex">
      <Image
        src={Picture}
        alt="Work Image"
        className="w-[480px] h-96 relative rounded-xl shadow"
      />
    </div>
  );
};
