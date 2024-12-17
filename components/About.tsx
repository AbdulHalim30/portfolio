import Image from "next/image";
import React from "react";
import laptop from "@/public/images/laptop.png";
import brush from "@/public/images/brush.png";
import brush2 from "@/public/images/brush2.png";

const About = () => {
  return (
    <section className="w-full h-auto relative pt-[70px] md:pt-0" id="about">
      <div className="w-full h-auto px-8 relative">
        <div className="container mx-auto">
          <div className="w-full h-screen flex items-center">
            <div className="hidden md:block w-1/2">
              <Image className="bg-cover" src={laptop} alt="abstrak" />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <div>
                <span className="text-[22px] text-orange-600 font-semibold">
                  I&#39;m a Software Engineer
                </span>
                <h3 className="text-[25px] md:text-[40px] mb-6">
                  I Can Develop Anything You Need
                </h3>
              </div>
              <div>
                <p className="text-justify leading-8 font-medium">
                  Hello there! I&#39;m a software Engineer, and I&#39;m very
                  passionate and dedicated to my work. I have experience in
                  building web applications using <b>React.js</b>,{" "}
                  <b>Next.js</b>, <b>Angular</b>, <b>TailwindCSS</b>, and{" "}
                  <b>GraphQL</b>. I specialize in creating fast, scalable, and
                  user-friendly solutions to solve real-world problems. I&#39;m
                  committed to writing clean, efficient code while focusing on
                  performance and user experience. Whether it&#39; s developing
                  new features, optimizing existing ones, or collaborating with
                  teams, I enjoy bringing ideas to life through technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute top-[20px]">
        <Image src={brush} alt="brush" />
      </div>
      <div className="hidden md:block absolute right-0 bottom-[-50px]">
        <Image src={brush2} alt="brush2" />
      </div>
    </section>
  );
};

export default About;
