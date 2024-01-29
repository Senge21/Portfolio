import Image from "next/image";
import Pic from "../layout/portfolioImg/about/Pic.png"

export const About = () => {
  return (
    <div
      id="About"
      className="w-full justify-center bg-[#f9fafb] h-[962px] flex py-24 px-20"
    >
      <div className="w-[1280px] h-[770px] px-[32px] gap-4 flex flex-col">
        <div className="flex justify-center mb-[48px]">
          <button className="py-[4px] px-[20px] rounded-[12px] bg-[#e5e7eb]  ">
            About me
          </button>
        </div>
        <div className="w-[1216px] h-[694px] flex gap-12 items-center justify-start ">
          <div className="w-[584px] h-[694px] flex-col justify-start items-start inline-flex">
            <div className="w-[440px] h-[520px] relative">
              <div className="w-[400px] h-[480px] left-0 top-[40px] absolute bg-gray-200 border-8 border-gray-50" />
              <Image src={Pic} className="w-[400px] h-[480px] left-10 top-0 absolute border-8 border-gray-50 " />
            </div>
          </div>


          <div className="flex w-[584px] h-[694px] items-start  gap-6 flex-col *:group-[text-[16px] text-sm-[24px] text-gray-600 font-[400]]:">
            <div>
              <p className=" text-[#111827] font-semibold text-3xl text-center">
                Curious about me? Here you have it:
              </p>
            </div>
            <p>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <div className="flex gap-10">
              <div className="flex flex-col">
                <p>* B.E. in Computer Engineering</p>
                <p> * Full time freelancer</p>
              </div>
              <div className="flex flex-col">
                <p> * Avid learner</p>
                <p>* Aspiring indie hacker</p>
              </div>
            </div>
            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
