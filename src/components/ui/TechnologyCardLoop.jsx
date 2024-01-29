import javascriptImg from "./TechImg/javascript.png";
import typescriptImg from "./TechImg/typescript.png";
import reactImg from "./TechImg/react.png";
import nextImg from "./TechImg/nextjs.png";
import nodeImg from "./TechImg/nodejs.png";
import expressImg from "./TechImg/express.png";
import nestImg from "./TechImg/nest.png";
import socketImg from "./TechImg/socket.png";
import postgreSqlImg from "./TechImg/postgresql.png";
import mongodbImg from "./TechImg/mongodb.png";
import sassScssImg from "./TechImg/icon-sass.svg";
import tailwindImg from "./TechImg/tailwindcss.png";
import figmaImg from "./TechImg/figma.png";
import cypressImg from "./TechImg/cypress.png";
import storybook from "./TechImg/storybook.png";
import gitImg from "./TechImg/git.png";

import Image from "next/image";

const Techs = [
  {
    name: "javascript",
    img: javascriptImg,
  },
  {
    name: "Typescript",
    img: typescriptImg,
  },
  {
    name: "React",
    img: reactImg,
  },
  {
    name: "Next.js",
    img: nextImg,
  },
  {
    name: "Node.js",
    img: nodeImg,
  },
  {
    name: "Express.js",
    img: expressImg,
  },
  {
    name: "Nest.js",
    img: nestImg,
  },
  {
    name: "Socket.io",
    img: socketImg,
  },
  {
    name: "PostgreSQL",
    img: postgreSqlImg,
  },
  {
    name: "MongoDB",
    img: mongodbImg,
  },
  {
    name: "Sass/Scss",
    img: sassScssImg,
  },
  {
    name: "Tailwindcss",
    img: tailwindImg,
  },
  {
    name: "Figma",
    img: figmaImg,
  },
  {
    name: "Cypress",
    img: cypressImg,
  },
  {
    name: "Storybook",
    img: storybook,
  },
  {
    name: "Git",
    img: gitImg,
  },
];

export const TechnologyCardLoop = () => {
  return (
    <div className="  flex-wrap flex gap-[48px] max-w-[1216px] mx-auto">
      {Techs.map((el, i) => (
        <div
          key={i}
          className="pl self-stretch flex-col justify-center items-center gap-2"
        >
          <div className="w-16 h-16 relative">
            <Image src={el.img} layout="fill" objectFit="contain" />
          </div>
          <div className="text-gray-600 text-lg font-normal font-['Inter'] leading-7 w-[102px] h-[28px]">
            {el.name}
          </div>
        </div>
      ))}
    </div>
  );
};