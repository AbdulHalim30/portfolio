import Image from "next/image";
import React from "react";
import avatar from "@/public/images/avatar.jpg";
import {
  RiFacebookFill,
  RiTwitterXFill,
  RiLinkedinFill,
  RiGithubFill,
} from "react-icons/ri";

const Hero = () => {
  return (
    <section className="w-full h-auto" id="home">
      <div className="w-full h-screen relative">
        <div
          className="absolute top-0 bottom-0 left-0 right-0 bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage: 'url("/images/bg-hero.png")',
          }}
        >
          <div className="h-full px-8">
            <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-normal md:justify-between mt-20 md:mt-0">
              {/* Avatar pindah ke atas di versi mobile */}
              <div className="w-full flex justify-center md:hidden mb-8">
                <Image
                  className="rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
                  src={avatar}
                  alt="avatar"
                  width={100}
                  height={100}
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2">
                <h3 className="text-orange-600 text-center md:text-left text-[25px]">
                  Hello, I&#39;m
                </h3>
                <h3 className="text-gray-800 text-center md:text-left text-[30px] md:text-[50px] font-semibold mb-2 md:mb-4">
                  Abdul Halim
                </h3>
                <div className="font-semibold text-black">
                  <p className="text-center md:text-left text-[19px] mb-4">
                    A <span className="text-green-500">Software Engineer</span>{" "}
                    From <span className="text-purple-600">Kuningan</span>
                  </p>
                </div>
                <p className="text-[16px] text-justify md:text-left font-medium leading-normal mb-10">
                  I&#39;m a Software Engineer specializing in web application
                  development. With experience across various technologies, I
                  create efficient, scalable, and impactful systems.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <a
                    href="#about"
                    className="relative inline-block bg-orange-600 text-white font-bold mb-2 md:mb-0 py-4 px-[60px] md:px-8 border-2 border-orange-600 rounded-full overflow-hidden transition-all duration-500 group"
                  >
                    <span className="relative z-10 font-bold group-hover:text-black">
                      About Me
                    </span>
                    <span className="absolute inset-0 bg-customCream translate-y-full transition-transform duration-500 group-hover:translate-y-0"></span>
                  </a>
                  <div className="flex flex-row gap-2">
                    <a
                      href="https://web.facebook.com/abdul.halim.98499"
                      target="_blank"
                    >
                      <RiFacebookFill size={20} />
                    </a>
                    <a href="https://x.com/hallo_abdul" target="_blank">
                      <RiTwitterXFill size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abhalim/"
                      target="_blank"
                    >
                      <RiLinkedinFill size={20} />
                    </a>
                    <a href="https://github.com/AbdulHalim30" target="_blank">
                      <RiGithubFill size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Avatar untuk versi desktop */}
              <div className="hidden md:block w-1/2 pl-[200px]">
                <Image
                  className="rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
                  src={avatar}
                  alt="avatar"
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
