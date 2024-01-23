import Icon from "../portfolioImg/footer/Icon.png"
export const Footer = () => {
  return (
    <div className="w-pull flex justify-center items-center bg-[#f9fafb] py-[24px] px-[80px]">
      <div className="w-[1280px] h-[20px] px-[32px] gap-[64px] flex items-center justify-center">
        <div className="w-[359px] h-[20px] gap-[8px] flex justify-center items-center">

          <img className="w-4 h-4 " src={Icon} alt="" />
          <p className="font-[400] text-[14px] leading-[20px] text-[#4b5563] font-['Inter_Sans'] ">2023 | Designed and coded with ❤️️ by Sagar Shah</p>

        </div>
      </div>
    </div>
  );
};
