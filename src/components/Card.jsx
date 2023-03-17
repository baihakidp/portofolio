import Link from "next/link";
import React from "react";
import customer from "../assets/customer-projects.png";

const Card = (item) => {
  return (
    <li className="relative group">
      <Link href={item.href}>
        <img
          className="w-[1080px] rounded-3xl group-hover:blur-[5px]"
          src={item.src}
        />
        <div className="opacity-0 translate-y-[50%] group-hover:opacity-70 group-hover:translate-y-0 transform transition duration-500 inset-0 absolute text-white bg-black rounded-3xl ">
          <div className="flex flex-col items-start px-10 justify-center h-full gap-4">
            <div className="font-bold gap-3">
              <h3 className="text-[36px]">{item.title}</h3>
              <h4>{item.subtitle}</h4>
            </div>
            <p className="hidden md:block">{item.desc}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Card;
