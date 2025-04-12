import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl sm:px-6 md:max-w-5xl text-white py-8">
      <hr className="border-t border-gray-700 mb-6 w-full" />
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        {/* Copyright Section */}
        <div className="text-center sm:text-left">
          <span>&copy; 2025 Chinenye Obiakor</span>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 justify-center sm:justify-end items-center">
          <a
            href="https://github.com/chinyex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-6 w-6 hover:text-gray-400 transition-colors duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/chinenye-obiakor-5579052ab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin className="h-6 w-6 hover:text-gray-400 transition-colors duration-300" />
          </a>
          <a
            href="https://twitter.com/Obiakor_Chinyex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXFill className="h-6 w-6 hover:text-gray-400 transition-colors duration-300" />
          </a>
          <a
            href="https://www.youtube.com/chinenyeobiakor4475"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiYoutube className="h-6 w-6 hover:text-gray-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
