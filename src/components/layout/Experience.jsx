import { ExperienceLoop } from "../ui/ExpeienceLoop";

export const Experience = () => {
  return (
    <div className="w-full  h-[1140px] px-20 py-24 bg-gray-50 flex-col justify-center items-center inline-flex flex">
      <div className="self-stretch h-[948px] px-8 flex-col justify-center items-center gap-12 flex">
        <div className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch h-7 flex-col justify-center items-center flex">
            <div className="px-5 py-1 bg-gray-200 rounded-xl justify-center items-center inline-flex">
              <div className="text-gray-600 text-sm font-medium font-['Inter'] leading-tight">
                Experience
              </div>
            </div>
          </div>
          <div className="self-stretch h-7 flex-col justify-center items-center flex">
            <div className="self-stretch text-center text-gray-600 text-xl font-normal font-['Inter'] leading-7">
              Here is a quick summary of my most recent experiences:
            </div>
          </div>
        </div>
        <ExperienceLoop />
      </div>
    </div>
  );
};
