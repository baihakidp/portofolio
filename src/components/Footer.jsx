import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 mt-72" id="footer">
      <div className="container mx-auto px-4 flex flex-col items-center gap-11 text-white mb-[20px]">
        <div className="mt-11 flex gap-11">
          <a
            className="text-white hover:text-gray-600 transition-colors"
            href="https://github.com/baihakidp"
          >
            Github
          </a>
          <a
            className="text-white hover:text-gray-600 transition-colors"
            href="https://www.linkedin.com/in/baihakidemiandra/"
          >
            Linkedin
          </a>
          <a className="text-white hover:text-gray-600 transition-colors">
            Resume
          </a>
        </div>
        <p className="text-center text-white">
          Made by Baihaki Demiandra Putra
        </p>
      </div>
    </footer>
  );
};

export default Footer;
