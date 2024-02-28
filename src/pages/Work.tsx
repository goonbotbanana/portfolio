// import React from "react";
import Nav from "../components/Nav";
import "../App.css";
import { Link } from "react-router-dom";

function Work() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <div className="mx-[5%] md:mx-[15%] lg:mx-[25%] min-h-screen flex flex-col">
        <Nav />
        <p className="text-left mt-8">
          At the moment, I'm working on {""}
          <a
            className="font-semibold text-slate-500 transition-colors duration-500 ease-in-out underline underline-offset-2 hover:text-light-blue"
            href="https://github.com/MewingCentral/FEPrep"
            target="_blank"
          >
            FEPrep
          </a>{" "}
          which is a learning platform for computer science students preparing
          to take the{" "}
          <a
            className="font-semibold text-slate-500 transition-colors duration-500 ease-in-out underline underline-offset-2 hover:text-light-blue"
            href="https://www.cs.ucf.edu/ucf_section/foundation-exam/"
            target="_blank"
          >
            Foundation Exam
          </a>{" "}
          at UCF.
          <p className="text-left mt-4">
            This tool allows students to review exam material through various
            methods as they collaborate on solutions with their peers and
            professors in the forums.
          </p>
        </p>
        {/* <h1 className="text-xl font-semibold text-left mt-4">Experience</h1> */}
        <hr className="my-4 border-gray-400 dark:border-gray-500"></hr>
        <div>
          <h1 className="flex flex-wrap items-center text-xl text-left">
            <a className="mr-4 transition-colors duration-500 ease-in-out hover:text-light-blue underline underline-offset-2">
              <Link to={"https://club.knighthacks.org/"}>Knight Hacks</Link>
            </a>
            <img
              src="https://skillicons.dev/icons?i=ts,tailwind,next"
              className="flex flex-row max-h-9 opacity-90"
            ></img>
          </h1>
          <h2 className="text-sm text-slate-500 font-medium text-left mb-4">
            <a className="justify-start">Full-stack Developer</a>{" "}
            <a className="italic text-xs">(Jan. 2024-Present)</a>
          </h2>
          <ul className="text-left mt-4 text-md text-slate-500 list-disc leading-relaxed">
            <li>
              Developing an administrative tool with React and TypeScript,
              enhancing the capabilities of hackathon organizers to efficiently
              manage events with over 700 participants.
            </li>
            <li className="mt-2">
              Embracing cutting-edge solutions and technologies like TursoDB,
              Clerk, and Turborepo, to optimize system performance.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h1 className="flex flex-wrap items-center text-xl text-left">
            <a className="mr-4 transition-colors duration-500 ease-in-out hover:text-light-blue underline underline-offset-2">
              <Link to={"https://discord.gg/GWG4wzz88b"}>RDC @ UCF</Link>
            </a>
            <img
              src="https://skillicons.dev/icons?i=ts,tailwind,angular"
              className="flex flex-row max-h-9 opacity-90"
            ></img>
          </h1>
          <h2 className="text-sm text-slate-500 font-medium text-left mb-4">
            <a className="justify-start">Webmaster</a>{" "}
            <a className="italic text-xs">(Jan. 2024-Present)</a>
          </h2>
          <ul className="text-left mt-4 text-md text-slate-500 list-disc leading-relaxed">
            <li>
              Increasing organization outreach and managing the Roblox
              Development Club's data through the development of the club site.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h1 className="flex flex-wrap items-center text-xl text-left">
            <a className="mr-4 transition-colors duration-500 ease-in-out hover:text-light-blue underline underline-offset-2">
              <Link to={"https://github.com/Banana-Byte-LLC"}>Banana Byte</Link>
            </a>
            <img
              src="https://skillicons.dev/icons?i=ts,tailwind,react"
              className="flex flex-row max-h-9 opacity-90"
            ></img>
          </h1>
          <h2 className="text-sm text-slate-500 font-medium text-left mb-4">
            <a className="justify-start">Co-Founder & Front-end Developer</a>{" "}
            <a className="italic text-xs">(Dec. 2023-Present)</a>
          </h2>
          <ul className="text-left mt-4 text-md text-slate-500 list-disc leading-relaxed">
            <li>
              Working on a mobile startup for college students on the dating
              market.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h1 className="flex flex-wrap items-center text-xl text-left">
            <a className="mr-4 transition-colors duration-500 ease-in-out hover:text-light-blue underline underline-offset-2">
              <Link to={"https://www.floridablue.com/"}>Florida Blue</Link>
            </a>
            <img
              src="https://skillicons.dev/icons?i=js,react"
              className="flex flex-row max-h-9 opacity-90"
            ></img>
          </h1>
          <h2 className="text-sm text-slate-500 font-medium text-left mb-4">
            <a className="justify-start">Application Development Intern</a>{" "}
            <a className="italic text-xs">(May-Aug. 2023)</a>
          </h2>
          <ul className="text-left mt-4 text-md text-slate-500 list-disc leading-relaxed">
            <li>
              Resolved defects within the preferences and consents admin tool
              using Javascript and React.
            </li>
            <li className="mt-2">
              Contributed to the implementation of internal tools by creating
              technical design documentation.
            </li>
            <li className="mt-2">
              Wrote and updated OpenAPI/Swagger documentation for API endpoints
              to be leveraged by integrating teams.
            </li>
          </ul>
        </div>
        {/* <hr className="my-4 border-gray-400 dark:border-gray-500"></hr> */}
      </div>
    </>
  );
}

export default Work;
