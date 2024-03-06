// import React from "react";
import Nav from "../components/Nav";
import "../App.css";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function Work() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <div className="mx-[0%] md:mx-[15%] lg:mx-[25%] min-h-screen flex flex-col">
        <Nav />
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <p className="text-left mt-8">
              At the moment, I'm working on {""}
              <a
                className="font-semibold text-slate-500 transition-all duration-300 ease-in-out link link-underline link-underline-black"
                href="https://github.com/MewingCentral/FEPrep"
                target="_blank"
              >
                FEPrep
              </a>{" "}
              which is a learning platform for computer science students
              preparing to take the{" "}
              <a
                className="font-semibold text-slate-500 transition-all duration-300 ease-in-out link link-underline link-underline-black"
                href="https://www.cs.ucf.edu/ucf_section/foundation-exam/"
                target="_blank"
              >
                Foundation Exam
              </a>{" "}
              at UCF.
              <p className="text-left mt-4">
                This tool will allow students to review previous exams through
                various methods as they collaborate on solutions with their
                peers and professors through forums.
              </p>
            </p>
            <hr className="my-4 border-gray-400 dark:border-gray-500"></hr>
            <div>
              <h1 className="flex items-center text-xl text-left mt-4">
                <a
                  className="mr-4 transition-all duration-300 ease-in-out linek link-underline link-underline-black"
                  href="https://www.floridablue.com/"
                >
                  <Link to={"https://www.floridablue.com/"}>Florida Blue</Link>
                </a>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8, x: -25 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  className="flex flex-row items-center"
                >
                  <img
                    src="https://skillicons.dev/icons?i=js,react"
                    className="flex flex-row max-h-9 opacity-90"
                    alt="js,react"
                  ></img>
                </motion.span>
              </h1>
              <h2 className="text-sm text-slate-500 font-medium text-left mb-4">
                <p className="justify-start text-slate-500">
                  Application Development Intern{" "}
                  <span className="text-slate-500 text-xs">
                    (May-Aug. 2023)
                  </span>
                </p>{" "}
              </h2>
              <ul className="text-left mt-4 text-md text-slate-500 list-disc leading-relaxed">
                <li>
                  Improved consumer preference/consent auditing on the admin
                  tool.
                </li>
                <li>
                  <i>
                    Returning for the{" "}
                    <b className="text-slate-500">summer of 2024</b>!
                  </i>{" "}
                  &#127881;
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h1 className="flex items-center text-xl text-left mt-2">
                <a
                  className="mr-4 transition-all duration-300 ease-in-out linek link-underline link-underline-black"
                  href="https://club.knighthacks.org/"
                >
                  <Link to={"https://club.knighthacks.org/"}>Knight Hacks</Link>
                </a>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8, x: -25 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  className="flex flex-row items-center"
                >
                  <img
                    src="https://skillicons.dev/icons?i=ts,tailwind,next"
                    className="flex flex-row max-h-9 opacity-90"
                    alt="ts,tailwind,next"
                  ></img>
                </motion.span>
              </h1>
              <h2 className="text-sm text-slate-500 font-medium text-left mb-4">
                <p className="justify-start text-slate-500">
                  Full-stack Developer{" "}
                  <span className="text-slate-500 text-xs">
                    (Feb. 2024-Present)
                  </span>
                </p>
              </h2>
              <ul className="text-left mt-4 text-md text-slate-500 list-disc leading-relaxed">
                {/* <li>
                  Developing an administrative tool with which will allow hackathon
                  organizers to efficiently manage events with over 700
                  participants.
                </li> */}
                <li className="mt-2">
                  Curating solutions with emerging technologies to optimize
                  system performance and improve efficiency for hackathon
                  organizers.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h1 className="flex items-center text-xl text-left mt-4 shrink">
                <a
                  className="mr-4 transition-all duration-300 ease-in-out linek link-underline link-underline-black"
                  href="https://discord.gg/GWG4wzz88b"
                >
                  <Link to={"https://discord.gg/GWG4wzz88b"}>RDC @ UCF</Link>
                </a>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8, x: -25 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  className="flex flex-row items-center"
                >
                  <img
                    src="https://skillicons.dev/icons?i=ts,tailwind,vue"
                    className="flex flex-row max-h-9 opacity-90"
                    alt="ts,tailwind,angular"
                  ></img>
                </motion.span>
              </h1>
              <h2 className="text-sm text-slate-500 font-medium text-left mb-4">
                <p className="justify-start text-slate-500">
                  Webmaster{" "}
                  <span className="text-slate-500 text-xs">
                    (Feb. 2024-Present)
                  </span>
                </p>
              </h2>
              <ul className="text-left mt-4 text-md text-slate-500 list-disc leading-relaxed">
                <li>
                  Increasing organization outreach and improving communication
                  with the club population.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h1 className="flex items-center text-xl text-left mt-4">
                <a
                  className="mr-4 transition-all duration-300 ease-in-out linek link-underline link-underline-black"
                  href="https://github.com/Banana-Byte-LLC"
                >
                  <Link to={"https://github.com/Banana-Byte-LLC"}>
                    Banana Byte
                  </Link>
                </a>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8, x: -25 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  className="flex flex-row items-center"
                >
                  <img
                    src="https://skillicons.dev/icons?i=ts,tailwind,react"
                    className="flex flex-row max-h-9 opacity-90"
                    alt="ts,tailwind,react"
                  ></img>
                </motion.span>
              </h1>
              <h2 className="text-sm text-slate-500 font-medium text-left mb-4">
                <p className="justify-start text-slate-500">
                  Co-Founder & Front-end Developer{" "}
                  <span className="text-slate-500 text-xs">
                    (Dec. 2023-Present)
                  </span>
                </p>
              </h2>
              <ul className="text-left mt-4 text-md text-slate-500 list-disc leading-relaxed">
                <li>Founding a social platform for college affiliates.</li>
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default Work;
