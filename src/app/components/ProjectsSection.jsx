"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { LuSquareArrowUpRight } from "react-icons/lu";

const projectsData = [
  {
    id: "1",
    title: "insurance-landing-page",
    description:
      "A clean and professional landing page design for an insurance company, built with HTML and CSS. The layout focuses on clarity and trust, featuring well-structured sections, modern typography, and a balanced color scheme. Designed purely for visual presentation, it showcases a simple yet effective approach to user-friendly design.",
    image: "/images/insure-image..png",
    github: "https://github.com/chinyex/Insure-Landing-page",
    liveLink: "https://insure-landing-page-ashen-nu.vercel.app/",
  },
  {
    id: "2",
    title: "Metaversus Website",
    description:
      "A futuristic website design that immerses users in a digital universe of endless possibilities. The interface lets users choose from different virtual worlds to explore, each offering unique experiences. With a sleek layout, smooth transitions, and interactive elements, the design delivers a bold, immersive entry point into the metaverse.",
    image: "/images/Metaverse.png",
    github: "https://github.com/chinyex/Metaversus",
    liveLink: "https://metaversus-srio.vercel.app/",
  },
  {
    id: "3",
    title: "Travel Website",
    description:
      "This travel app design is built to simplify your journey and enhance the adventure experience. It provides users with an intuitive guide that leads them along easy paths to their destinations. The app features real, offline maps, ensuring seamless navigation even without internet access. Additionally, users can set personalized adventure schedules, planning trips with key attractions and activities.",
    image: "/images/TravelUI.png",
    github: "https://github.com/chinyex/Travel-website",
    liveLink: "https://travel-website-eight-drab.vercel.app/",
  },
  {
    id: "4",
    title: "Restaurant Website",
    description:
      "This project showcases a sleek and user-friendly design for a restaurant food delivery app. The interface focuses on providing a seamless user experience, with intuitive navigation for browsing menus, placing orders, and tracking deliveries. The design also includes user profile management, order history, and real-time order tracking, ensuring customers have a smooth and enjoyable dining experience from start to finish.",
    image: "/images/RestaurantSite.png",
    github: "https://github.com/chinyex/Restaurant-Website",
    liveLink: "https://restaurant-website-co4w.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-7 ">
      <h1 className="text-center font-bold text-3xl sm:text-4xl text-white">
        Projects
      </h1>

      <div className="flex flex-col mt-10 space-y-16">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="flex flex-col lg:flex-row lg:space-x-12"
          >
            {/* IMAGE */}
            <div className="w-full lg:w-1/2 flex justify-center items-center md:mb-0 ">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={400}
                className="rounded-xl shadow-lg object-contain w-full h-auto "
              />
            </div>

            {/* TEXT */}
            <div className="text-white w-full lg:w-1/2 mt-6 lg:mt-0">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                {project.description}
              </p>

              <div className="flex space-x-4 mt-6">
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <FaGithub className="h-6 w-6 hover:text-gray-400" />
                  </Link>
                )}
                {project.liveLink && (
                  <Link href={project.liveLink} target="_blank">
                    <LuSquareArrowUpRight className="h-6 w-6 hover:text-gray-400" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
