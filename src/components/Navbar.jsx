import Link from "next/link";
import React from "react";
import Container from "./Container";

const NavbarList = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#Contact",
    label: "Contact",
  },
];

const Navbar = () => {
  return (
    <Container>
      <div className="">
        <div className="flex justify-between py-6 px-4 ">
          <div>Image</div>
          <div>
            <ul className="flex gap-4 font-bold text-[16px]">
              <Link
                href="#about"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                <li>About</li>
              </Link>
              <Link
                href="#projects"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                <li>Projects</li>
              </Link>
              <Link
                href="http://wa.me/6285155430035"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
