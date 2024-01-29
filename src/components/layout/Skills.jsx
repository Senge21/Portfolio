import { TechnologyCardLoop } from "../ui/TechnologyCardLoop";
export const Skills = () => {
  return (
    <div className="w-[1440px] h-[560px] px-20 py-24 bg-white flex-col justify-center items-center inline-flex">
      <div className="self-stretch h-[368px] px-8 flex-col justify-start items-start gap-12 flex">
        <div className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch h-7 flex-col justify-center items-center flex">
            <div className="px-5 py-1 bg-gray-200 rounded-xl justify-center items-center inline-flex">
              <div className="text-gray-600 text-sm font-medium font-['Inter'] leading-tight">
                Skills
              </div>
            </div>
          </div>
          <div className="self-stretch h-7 flex-col justify-center items-center flex">
            <div className="self-stretch text-center text-gray-600 text-xl font-normal font-['Inter'] leading-7">
              The skills, tools and technologies I am really good at:
            </div>
          </div>
        </div>
        <TechnologyCardLoop />
      </div>
    </div>
  );
};
