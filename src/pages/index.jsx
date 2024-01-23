import {
  Header,
  Profile,
  About,
  Skills,
  Experience,
  Work,
  GetInTouch,
  Footer,
} from "@/components/layout";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col justify-center w-screen">
        <Header />
        <Profile />
        <About />
        <Skills />
        <Experience />
        <GetInTouch />
      </div>
    </div>
  );
}
