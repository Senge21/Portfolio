import React from "react";
import { Link } from "react-scroll";
export const Header = () => {
  return (
    <div className="w-full h-[68px] bg-[#ffffff] py-[16px] px-[80px] *:group-[font-['Inter_Sans']  justify-center flex mx-auto">
      <div className="flex justify-between  w-[1280px] h-[36px] px-[32px]">
        <div className=" w-[96px] h-[36px] text-[#111827] font-[700]  text-[36px] text-center ">
          {"<SS/>"}
        </div>
        <div className="w-[554px] h-[36px] ">
          <ul className="flex gap-[24px] *:group[font-[500] text-sm/[50px] text-[#4b5563] text-[28px]] ">
            <li>
              <Link
                to="About"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="Work"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="Testimonials"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Testimonails
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <div className="flex gap-[16px] justify-center items-center">
              <div></div>
              <img
                className="w-[60px] h-[50px] p-[6px]"
                src="https://web.dev/static/articles/building/a-theme-switch-component/image/alttexthere-19c8b69d60ba.png"
                alt=""
              />
              <button className="w-[104px] h-[24px] font-[500] size-[16px] text-sm/[24px] bg-[#111827] text-[#f9fafb] rounded-[12px] py-{6} px-{16}">
                Download CV
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
