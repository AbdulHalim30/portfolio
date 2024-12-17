import React from "react";
import {
  FaReact,
  FaAngular,
  FaLaravel,
  FaJs,
  FaPhp,
  FaGitAlt,
  FaJenkins,
  FaBootstrap,
} from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiJest,
  SiStyledcomponents,
  SiMariadb,
  SiPostgresql,
  SiGo,
  SiGraphql,
} from "react-icons/si";
import reactTestingLibrary from "@/public/images/skill/logos--testing-library.png";
import sql from "@/public/images/skill/sql.png";
import vscode from "@/public/images/skill/vscode.png";
import mui from "@/public/images/skill/mui.png";
import Image from "next/image";

const skills = [
  { name: "React.js", icon: <FaReact color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
  { name: "Angular", icon: <FaAngular color="#DD0031" /> },
  { name: "Laravel", icon: <FaLaravel color="#FF2D20" /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "Go", icon: <SiGo color="#00ADD8" /> },
  { name: "PHP", icon: <FaPhp color="#777BB4" /> },
  { name: "SQL", icon: <Image src={sql} alt="sql" width={30} /> }, // Tidak ada ikon di react-icons
  { name: "Redux", icon: <SiRedux color="#764ABC" /> },
  { name: "Material-UI", icon: <Image src={mui} alt="mui" width={30} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "Jest", icon: <SiJest color="#C21325" /> },
  {
    name: "React Testing Library",
    icon: (
      <Image src={reactTestingLibrary} alt="React Testing Library" width={30} />
    ),
  }, // Tidak ada ikon di react-icons
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
  { name: "Styled Components", icon: <SiStyledcomponents color="#DB7093" /> },
  { name: "GraphQL", icon: <SiGraphql color="#E10098" /> },
  { name: "MariaDB", icon: <SiMariadb color="#003545" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "Jenkins", icon: <FaJenkins color="#D24939" /> },
  { name: "Azure", icon: <VscAzureDevops color="#0078D7" /> },
  { name: "VSCode", icon: <Image src={vscode} alt="vscode" width={30} /> }, // Tidak ada ikon di react-icons
];

const Skill = () => {
  return (
    <section className="w-full h-auto relative" id="skill">
      <div className="w-full h-auto px-8 pt-20">
        <div className="container mx-auto py-0 md:py-16">
          <h2 className="text-[28px] md:text-[30px] text-orange-600 font-semibold text-center mb-12">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">
                  {skill.icon || (
                    <span className="text-gray-500">{skill.name[0]}</span>
                  )}
                </div>
                <h3 className="text-center text-lg font-medium text-gray-700">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="absolute top-[20px]">
        <Image src={brush5} alt="brush3" />
      </div> */}
    </section>
  );
};

export default Skill;
