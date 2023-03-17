import Link from "next/link";
import React from "react";
import Container from "./Container";
import Mail from "./Mail";

const Landingpage = () => {
  return (
    <Container className="h-screen">
      <div
        id="about"
        className="h-[80%] gap-3 flex flex-col justify-center items-center "
      >
        <div className="flex flex-col md:items-start">
          <div className="font-bold text-[52px] mb-[12px] leading-tight md:text-[136px]">
            <h1>Hey</h1>
            <h1>I'm Baihaki.</h1>
          </div>
          <div className=" md:w-[600px]">
            <p className="text-[18px]  md:text-[32px]">
              I'm a <b className="font-bold ">Frontend Software Engineer</b>{" "}
              with a strong passion for building web applications with great
              user experiences.
              <br /> Here's a bit more{" "}
              <Link href="#footer" scroll={false}>
                <b className="font-bold ">about me</b>.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Landingpage;
