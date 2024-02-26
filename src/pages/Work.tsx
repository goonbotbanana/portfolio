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
      <div className="mx-[0%] md:mx-[25%] lg:mx-[25%] min-h-screen flex flex-col">
        <Nav />
        <p className="text-left mt-8">
          At the moment, I'm working on {""}
          <a
            className="font-semibold text-slate-500 transition-colors duration-300 ease-in-out underline underline-offset-2 hover:text-dark-blue"
            href="https://github.com/MewingCentral/FEPrep"
            target="_blank"
          >
            FEPrep
          </a>{" "}
          which is a learning platform for computer science students preparing
          to take the{" "}
          <a
            className="font-semibold text-slate-500 transition-colors duration-300 ease-in-out underline underline-offset-2 hover:text-dark-blue"
            href="https://www.cs.ucf.edu/ucf_section/foundation-exam/"
            target="_blank"
          >
            Foundation Exam
          </a>{" "}
          at UCF.
          <p className="text-left mt-4">
            This tool allows students to review past exam questions as they
            collaborate and discuss the material with their peers and professors
            in the forums.
          </p>
        </p>
        {/* <h1 className="text-xl font-semibold text-left mt-4">Experience</h1> */}
        <hr className="mt-4 border-gray-400 dark:border-gray-500"></hr>
        <div>
          <h1 className="flex flex-wrap items-center text-xl text-left">
            <a className="mt-4 mr-4 transition-colors duration-300 ease-in-out hover:text-dark-blue underline underline-offset-2">
              <Link to={"https://www.floridablue.com/"}>Florida Blue</Link>
            </a>
            <img
              src="https://skillicons.dev/icons?i=js,react,swagger,openapi"
              className="mt-4 flex flex-row max-h-9 opacity-90"
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
        {/* <h1 className="text-xl font-semibold text-left mt-4">Projects</h1> */}
        <hr className="mt-4 border-gray-400 dark:border-gray-500"></hr>
        <div>
          <h1 className="text-xl text-left flex flex-wrap items-center">
            <a className="mt-4 mr-4 transition-colors duration-300 ease-in-out hover:text-dark-blue underline underline-offset-2">
              <Link to="https://github.com/gabeparra/Margot.AI">Margot.AI</Link>
            </a>
            <img
              src="https://skillicons.dev/icons?i=ts,react,mongo"
              className="mt-4 flex flex-row max-h-9 opacity-90"
            ></img>
          </h1>
          <h2 className="text-sm text-slate-500 font-medium text-left mb-4">
            Helping your kids have fun while learning Spanish!
          </h2>
          <ul className="text-left mt-4 text-md text-slate-500 list-disc leading-relaxed">
            <li>
              Awarded ”Best Use of MongoDB Atlas” at the 2023 "Knight Hacks"
              hackathon out of 322 participants.
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl text-left flex flex-wrap items-center">
            <a className="mt-4 mr-4 transition-colors duration-300 ease-in-out hover:text-dark-blue underline underline-offset-2">
              <Link to="https://github.com/goonbotbanana/Market-Insight">
                Market Insight
              </Link>{" "}
            </a>

            <img
              src="https://skillicons.dev/icons?i=js,tailwind,react"
              className="mt-4 flex flex-row max-h-9 opacity-90"
            ></img>
          </h1>
          <h2 className="text-sm text-slate-500 font-medium text-left mb-4">
            How are my stocks doing today?
          </h2>
          <ul className="text-left mt-4 text-md text-slate-500 list-disc leading-relaxed">
            <li>
              Utilizes Finnhub API to fetch real-time and historical stock data
              alongside the Recharts library for data visualization.
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl text-left flex flex-wrap items-center">
            <a className="mt-4 mr-4 transition-colors duration-300 ease-in-out hover:text-dark-blue underline underline-offset-2">
              <Link to="https://github.com/CoderSolian/Cosmic-Contacts">
                Cosmic Contacts
              </Link>{" "}
            </a>

            <img
              src="https://skillicons.dev/icons?i=js,php,mysql"
              className="mt-4 flex flex-row max-h-9 opacity-90"
            ></img>
          </h1>
          <h2 className="text-sm text-slate-500 font-medium text-left mb-4">
            Keep your contacts in order with this interstellar app.
          </h2>
          <ul className="text-left mt-4 text-md text-slate-500 list-disc leading-relaxed">
            <li>
              A LAMP stack application, capable of handling CRUD operations for
              contact lists.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Work;
