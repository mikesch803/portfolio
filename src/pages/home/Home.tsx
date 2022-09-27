import React from "react";
import { Link } from "react-router-dom";
import { default as hero } from "../../assets/images/hero.png";
import { iconData } from "../../data/icon-data";
import { projectsData } from "../../data/projects-data";
import { useTitle } from "../../hooks/useTitle";
export function Home() {
  useTitle("Home");
  return (
    <div>
      <section className="font-bold flex lg:flex-col flex-wrap w-full">
        <div className="flex-1 flex flex-col justify-center align-center tracking-widest text-gray-600 text-5xl xl:text-4xl">
          <h1 className=" leading-tight ">
            Hey! <span className="block">I am Mahendra Chauhan. </span>
          </h1>
          <h1 className="leading-tight">A frontend developer!</h1>
        </div>
        <div className="flex-1">

        <img className=" aspect-auto w-full" src={hero} alt="banner" />
        </div>
      </section>
      <section>
        <h2 className="capitalize text-4xl mt-6">my skills</h2>

        <ul className="grid grid-cols-5 sm:grid-cols-4 gap-20 my-6">
          {iconData.map((item) => (
            <li key={item.name}>
              <div className="text-6xl">{item.icon}</div>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="capitalize text-4xl my-6" id="projects">
          My Projects
        </h2>
        <ul className="text-xl grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-10">
          {projectsData.map((item) => (
            <li
              className="border p-5 max-w-20 rounded-lg shadow-md"
              key={item.id}
            >
              <h4 className="font-semibold">
                {item.name} - {item.app}
              </h4>
              <ul className="flex flex-wrap">
                {item.techStack.map((tech) => (
                  <li
                    className="border text-sm rounded-2xl py-1 px-2 bg-gray-200 my-2 mr-2"
                    key={tech}
                  >
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-1 mt-2 text-sm ">
                <a target="blank" href={item.live}><button className="border capitalize px-4  py-1 rounded-2xl  bg-orange-500 text-white hover:bg-orange-600">
                  live site
                </button></a>
                <a target="blank" href={item.github}><button className=" border capitalize px-4 py-1 rounded-2xl text-gray-500 hover:border-orange-600">
                  source code
                </button></a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
