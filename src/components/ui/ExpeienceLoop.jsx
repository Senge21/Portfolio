import Image from "next/image";
import upwork from "./experienceImg/upwork.png";

const experience = [
  {
    role: "Sr. Frontend Developer",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    time: "Nov 2021 - Present",
    img: "upwork",
  },
  {
    role: "Team Lead",
    description: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    time: "Jul 2017 - Oct 2021",
  },
  {
    role: "Full Stack Developer",
    description: [
      "Lorem ipsum dolor sit amet, consector adipiscing elit. Lorem ",
      "ipsum dolor sit amet, consectetor adispscing elit",
    ],
    time: "Dec 2015 - May 2017",
  },
];

export const ExperienceLoop = () => {
  return (
    <>
      {experience.map((el, i) => (
        <div
          key={i}
          className="h-72 p-8 bg-white rounded-xl shadow flex-col justify-start items-start flex"
        >
          <div className="self-stretch justify-start items-start gap-12 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
              <Image alt="upwork" src={upwork} className="w-[102px] h-[28px]" />
            </div>
            <div className="w-96 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch text-gray-900 text-xl font-semibold font-['Inter'] leading-7">
                {el.role}
              </div>
              <div className="self-stretch h-[180px] flex-col justify-start items-start gap-1 flex">
                {el.description.map((paragraph, j) => (
                  <div
                    key={j}
                    className="self-stretch text-gray-600 text-base font-normal font-['Inter'] leading-normal"
                  >
                    {paragraph}
                  </div>
                ))}
              </div>
            </div>
            <div className="justify-start items-start gap-6 flex">
              <div className="text-gray-700 text-base font-normal font-['Inter'] leading-normal">
                {el.time}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
