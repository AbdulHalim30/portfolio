import Image from "next/image";
import React from "react";
import experience from "@/public/images/experience.png";
import brush3 from "@/public/images/brush3.png";
import brush4 from "@/public/images/brush4.png";

const Experience = () => {
  return (
    <section
      className="w-full h-auto relative pt-[100px] md:pt-0"
      id="experience"
    >
      <div className="w-full h-auto px-8 relative">
        <div className="container mx-auto">
          <div className="w-full h-screen flex items-center">
            <div className="w-full md:w-1/2">
              <div>
                <h2 className="text-[28px] md:text-[30px] text-orange-600 font-semibold mb-4">
                  Experience
                </h2>
                <h3 className="text-[20px] md:text-[22px] font-semibold mb-2">
                  Software Engineer (Front End) @{" "}
                  <span className="text-purple-600">
                    Xapiens Teknologi Indonesia
                  </span>
                </h3>
              </div>
              <div>
                <ul className="list-disc pl-5 leading-8 font-medium text-left md:text-justify">
                  <li>
                    Develop, build, and maintain multiple applications using
                    React.js, Next.js, Angular, and Laravel.
                  </li>
                  <li>
                    Build responsive and user-friendly web applications using
                    React.js and styled-components, enhancing the overall user
                    experience.
                  </li>
                  <li>
                    Collaborate with the design team to implement engaging user
                    interfaces, leading to a 20% increase in user satisfaction.
                  </li>
                  <li>
                    Perform debugging and troubleshooting to resolve complex
                    issues, reducing system downtime by 40%.
                  </li>
                  <li>
                    Coordinate with cross-functional teams to complete projects
                    on time, resulting in a 25% increase in user satisfaction.
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 pl-8">
              <Image className="bg-cover" src={experience} alt="abstrak2" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute top-[20px]">
        <Image src={brush3} alt="brush3" />
      </div>
      <div className="hidden md:block absolute right-0 bottom-[-50px]">
        <Image src={brush4} alt="brush4" />
      </div>
    </section>
  );
};

export default Experience;
