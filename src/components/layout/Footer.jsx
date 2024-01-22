export const Footer = () => {
  return (
    <div className="w-[1440px] h-[68px] px-20 py-6 bg-gray-50 flex-col justify-center items-center inline-flex">
      <div className="self-stretch h-5 px-8 flex-col justify-center items-center gap-16 flex">
        <div className="self-stretch h-5 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch h-5 flex-col justify-center items-center flex">
            <div className="justify-center items-center gap-2 inline-flex">
              <div className="w-4 h-4 relative" />
              <div><span style="text-gray-600 text-sm font-normal font-['Inter'] leading-tight">2023 | </span><span style="text-gray-600 text-sm font-normal font-['Inter'] underline leading-tight">Designed</span><span style="text-gray-600 text-sm font-normal font-['Inter'] leading-tight"> and </span><span style="text-gray-600 text-sm font-normal font-['Inter'] underline leading-tight">coded</span><span style="text-gray-600 text-sm font-normal font-['Inter'] leading-tight"> with </span><span style="text-red-500 text-sm font-normal font-['Inter'] leading-tight">❤</span><span style="text-gray-600 text-sm font-normal font-['Inter'] leading-tight"> by Sagar Shah</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
