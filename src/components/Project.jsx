import Link from "next/link";
import React from "react";
import customer from "../assets/customer-projects.png";
import admin from "../assets/admin.png";
import Container from "./Container";
import Card from "./Card";

const PortofolioList = [
  {
    href: "https://customer-platinum-challenge.vercel.app/",
    src: customer.src,
    title: "Rental Car Projects Customer",
    subtitle: "Html, CSS, JavaScript, React",
    desc: (
      <>
        Rental Car Clone built using the Binar API. <br /> You can register
        first and then log in to try the feature.
      </>
    ),
  },
  {
    href: "https://adminplatinum.vercel.app/",
    src: admin.src,
    title: "Rental Car Projects Admin",
    subtitle: "Html, CSS, JavaScript, React",
    desc: (
      <>
        Rental Car Clone built using the Binar API. <br /> You can register
        first and then log in to try the feature.
      </>
    ),
  },
];

const Project = () => {
  return (
    <Container className="">
      <div id="projects" className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-[16px] mb-[60px] md:text-[36px]">
          Here are some of my projects
        </h1>
        <ul className="flex flex-col gap-48">
          {PortofolioList.map((item) => {
            console.log(item);
            return (
              <Card
                href={item.href}
                src={item.src}
                title={item.title}
                subtitle={item.subtitle}
                desc={item.desc}
              />
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default Project;
