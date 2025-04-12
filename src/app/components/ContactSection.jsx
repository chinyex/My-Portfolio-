import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-8 md:py-16 px-6 sm:px-12 bg-[#121212] text-white"
    >
      <div className="max-w-3xl mx-auto text-center mb-4">
        <h2 className="text-center font-bold text-3xl sm:text-4xl text-white">
          Contact Me
        </h2>
        <p className="mb-8 text-gray-300">
          Feel free to reach out via email or phone. I’m always open to
          collaborations and new opportunities!
        </p>

        <div className="flex flex-col gap-4 md:flex-row md:items-center sm:justify-center text-lg">
          <a
            href="mailto:obiakorchinenye47@gmail.com"
            className="flex items-center text-white hover:underline cursor-pointer"
          >
            <span className="mr-2">
              <CiMail />
            </span>
            obiakorchinenye47@gmail.com
          </a>
          <span className="hidden sm:inline text-gray-400">|</span>
          <a
            href="tel:+234XXXXXXXXXX"
            className="flex items-center text-white hover:underline cursor-pointer"
          >
            <span className="mr-2">
              <FaPhoneAlt />
            </span>{" "}
            (+234) 7087988852
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          {/* Hire Me Button */}
          <a
            href="mailto:obiakorchinenye47@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 sm:w-fit rounded-full font-medium text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition duration-300 cursor-pointer">
              Hire Me
            </button>
          </a>

          {/* Download CV Button */}
          <Link href="/cv.pdf" target="_blank" download>
            <button className="p-[2px] cursor-pointer sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition duration-300">
              <span className="flex items-center justify-center px-6 py-3 bg-[#121212] hover:bg-slate-800 text-white rounded-full font-medium transition duration-300">
                Download CV
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
