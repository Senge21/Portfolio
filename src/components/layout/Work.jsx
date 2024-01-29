import { WorkLoop, PictureLoop } from "../ui/WorkLoop";
export const Work = () => {
  return (
    <div
      id="Testimonials"
      className="w-[1440px] h-[1848px] px-20 py-24 bg-white flex-col justify-center items-center inline-flex"
    >
      <div className=" h-[1656px] px-8 flex-col justify-center items-center gap-12 flex">
        <div className=" h-[72px] flex-col justify-start items-start gap-4 flex">
          <div className=" h-7 flex-col justify-center items-center flex">
            <div className="px-5 py-1 bg-gray-200 rounded-xl justify-center items-center inline-flex">
              <div className="text-gray-600 text-sm font-medium font-['Inter'] leading-tight">
                Work
              </div>
            </div>
          </div>
          <div className=" h-7 flex-col justify-center items-center flex">
            <div className=" text-center text-gray-600 text-xl font-normal font-['Inter'] leading-7">
              Some of the noteworthy projects I have built:
            </div>
          </div>
        </div>
        <div className="  w-[1152px] bg-white rounded-xl shadow justify-start items-start inline-flex">
          <PictureLoop /> <WorkLoop />
        </div>
        <div className="  w-[1152px] bg-white rounded-xl shadow justify-start items-start inline-flex">
          <WorkLoop />
          <PictureLoop />
        </div>
        <div className="  w-[1152px] bg-white rounded-xl shadow justify-start items-start inline-flex">
          <PictureLoop /> <WorkLoop />
        </div>
      </div>
    </div>
  );
};
