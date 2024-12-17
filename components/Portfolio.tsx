import Image from "next/image";
import React from "react";
import brush5 from "@/public/images/brush5.png";
import portfolio from "@/public/images/portfolio/portfolio.png";
import burgetApp from "@/public/images/portfolio/burger-app.png";
import photoGallery from "@/public/images/portfolio/photo-galery.png";
import gsiLab from "@/public/images/portfolio/GSI-LAB-Logo.png";
import kadin from "@/public/images/portfolio/logo-kadin-indonesia.png";
import pdpKominfo from "@/public/images/portfolio/pdp-kominfo.png";
import { FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";

const portfolioData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing skills, projects, and contact information.",
    technologies: ["Nextjs", "Tailwindcss"],
    image: portfolio,
    github: null,
    demo: null,
  },
  {
    id: 2,
    title: "PDP Kominfo",
    description:
      "The PDP Kominfo website provides information, agendas, and news related to personal data protection in Indonesia, including policies, regulations, and events aimed at raising public awareness about data privacy.",
    technologies: [
      "React.js",
      "Styled-components",
      "Strapi",
      "Graphql",
      "React-redux",
    ],
    image: pdpKominfo,
    github: null,
    demo: "https://pdp.id/",
  },
  {
    id: 3,
    title: "Kadin Anggota",
    description:
      "The KADIN membership website allows registration, payments, and self-management of member data.",
    technologies: ["Laravel", "Angular", "Bootstrap", "MariaDb"],
    image: kadin,
    github: null,
    demo: null,
  },
  {
    id: 4,
    title: "Management Patient",
    description:
      "The GSI Lab website allows registration via Excel or personally and manages patients from registration to certificate issuance.",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Material-UI",
      "Graphql",
      "Go",
      "PostgreSql",
    ],
    image: gsiLab,
    github: null,
    demo: null,
  },
  {
    id: 5,
    title: "Burger App",
    description:
      "The Burger app allows users to easily create and place burger orders, customizing their choices for a personalized meal experience.",
    technologies: ["ReactJs", "Redux", "Firebase"],
    image: burgetApp,
    github: "https://github.com/AbdulHalim30/burger-project",
    demo: "https://react-my-burger-3d0d9.web.app/",
  },
  {
    id: 6,
    title: "Photo Gallery",
    description:
      "Website Photo Gallery allows users to upload and display photos in a gallery.",
    technologies: ["ReactJs", "Firebase", "Framer-motion"],
    image: photoGallery,
    github: "https://github.com/AbdulHalim30/photogallery",
    demo: null,
  },
];

const Portfolio = () => {
  return (
    <section className="w-full h-auto relative" id="portfolio">
      <div className="w-full h-auto px-8 pt-20 relative">
        <div className="container mx-auto py-0 md:py-16">
          <h2 className="text-[28px] md:text-[30px] font-bold text-orange-600 text-center mb-12">
            Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden relative"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-[22px] text-orange-600 font-semibold mb-4">
                    {project.title}
                  </h3>
                  <p className="font-medium leading-8 mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    <span className="font-bold">Technologies:</span>{" "}
                    <span className="font-semibold text-orange-600">
                      {project.technologies.join(", ")}
                    </span>
                  </p>
                  <div className=" absolute right-0 bottom-0">
                    <div className="flex justify-between p-4 gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          <FaGithubAlt />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute top-[20px]">
        <Image src={brush5} alt="brush3" />
      </div>
    </section>
  );
};

export default Portfolio;
