"use client";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-4 sm:px-8 py-10">
        {/* Left content */}
        <div className="lg:col-span-7 text-center sm:text-left">
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm <br />
            </span>
            <div className="md:h-[140px] overflow-hidden inline-block md:text-5xl text-2xl">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Chinenye",
                  1200, // wait 1s before replacing "Mice" with "Hamsters"
                  "a Frontend Web Developer",
                  1000,
                  "a Full Stack Web Developer in view",
                  1000,
                  "a Graduate of Electrical Engineering",
                  1000,
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
              />
            </div>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-xl mx-auto sm:mx-0">
            My goal as a front-end developer is to create web applications that are not only visually appealing but also provide a seamless user experience. 
          </p>

         
        </div>

        {/* Right image */}
        <div className="lg:col-span-5 flex justify-start">
          <Image
            src="/images/Nenye.JPG"
            alt="Chinenye"
            width={400}
            height={400}
            className="rounded-xl shadow-lg w-auto h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
