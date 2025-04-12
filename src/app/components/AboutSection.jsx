"use client";
import { useTransition, useState } from "react";
import Image from "next/image";
import React from "react";
import TabButton from "./TabButton";

const TabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4">
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li> Next.js</li>
        <li>Tailwind CSS</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li> MongoDB"</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4">
        <li>B.Eng in Engineering; University of Nigeria, Nsukka</li>
        <li>Web Development Training at Digitanotion Limited</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-4">
        <li>Intern at Digitanotion Limited, Awka</li>
        <li>FrontEnd Web Developer, 2+years</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-white mt-10 md:mt-24  ">
      <h2 className="text-center font-bold text-3xl sm:text-4xl text-white">
        About Me
      </h2>
      <div className="w-full mx-auto md:grid md:grid-cols-2 lg:gap-56 gap-8 items-center py-8 px-7 lg:px-9 sm:py-12 lg:py-16 mb-5">
        <Image
          src="/images/About_Image.jpg"
          alt="About Image"
          className="w-full h-auto max-w-xl rounded-lg shadow-lg lg:mb-[500px] "
          width={500}
          height={600}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base md:text-lg py-6 md:py-0 ">
            I am a passionate front-end web developer with a solid foundation in
            HTML, CSS, Tailwind CSS, JavaScript, and Next.js. I'm also diving
            into back-end technologies particularly the MERN stack.
            <br />
            I thrive on problem-solving and am constantly learning new
            techniques to improve my craft. I enjoy taking on challenges and
            pushing the boundaries of what I can create. Whether it's building
            responsive layouts or making sure every interaction is smooth, I
            take pride in delivering high-quality, user-friendly solutions.
            <br />
            Collaboration is key for me; I believe the best results come from
            working together and sharing ideas. I'm always excited to contribute
            my skills and learn from others in a team setting.
            <br />
            I'm always on the lookout for new opportunities to grow, and I’m
            eager to take on projects that will help me push my limits and make
            a positive impact.
          </p>

          <div className="flex flex-row mt-4 gap-3">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-4 ">
            {TabData.find((tabs) => tabs.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
