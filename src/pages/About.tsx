import "../App.css";
import Navbar from "../components/Nav.tsx";
// import { Link } from "react-router-dom";

function Index() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
        rel="stylesheet"
      />

      <div className="mx-[5%] md:mx-[25%] lg:mx-[25%] min-h-screen flex flex-col">
        <Navbar />
        <p className="text-left mt-8">
          Hey there! I'm{" "}
          <a className="font-semibold transition-colors duration-300 ease-in-out">
            Pharit
          </a>
          . I'm a software developer and student at the University of Central
          Florida. Here are some of my favorite technologies to play with:
        </p>
        <img
          src="https://skillicons.dev/icons?i=js,ts,html,css,java,tailwind,figma,nodejs,vercel,vite"
          className="mt-4 max-w-md opacity-90"
        ></img>
        <hr className="my-4 border-gray-400 dark:border-gray-500"></hr>
        <p className="text-left">
          I most enjoy building software in the sweet spot where design and
          engineering meet — things that look good but are also built well under
          the hood. When I’m not at the computer, I’m usually lifting, cooking,
          listening to{" "}
          <a
            className="font-semibold text-slate-500 transition-colors duration-300 ease-in-out hover:text-dark-blue underline underline-offset-2"
            href="https://www.youtube.com/watch?v=32RhpfhWxu4"
            target="_blank"
          >
            Laufey
          </a>
          , or finding another{" "}
          <a
            className="font-semibold text-slate-500 transition-colors duration-300 ease-in-out hover:text-dark-blue underline underline-offset-2"
            href="https://www.linkedin.com/feed/update/urn:li:activity:7120543526513164288/"
            target="_blank"
          >
            hackathon
          </a>{" "}
          to attend.
        </p>
        {/* <p className="text-left mt-4">
          At the moment, I'm working on a{" "}
          <a
            className="font-semibold text-slate-500 transition-colors duration-300 ease-in-out hover:text-dark-blue"
            href="https://github.com/MewingCentral/FEPrep"
            target="_blank"
          >
            learning platform
          </a>{" "}
          for students at UCF preparing to take the{" "}
          <a
            className="font-semibold text-slate-500 transition-colors duration-300 ease-in-out hover:text-dark-blue"
            href="https://www.cs.ucf.edu/ucf_section/foundation-exam/"
            target="_blank"
          >
            Foundation Exam.
          </a>{" "}
        </p> */}
        <p className="text-left mt-4">
          I'm always looking to learn more and improve my skills in software
          engineering through collaborative work.
        </p>
        <hr className="my-4 border-gray-400 dark:border-gray-500"></hr>
        <p className="text-left">
          You can reach me at{" "}
          <a
            className="font-semibold transition-all duration-500 ease-in-out hover:text-dark-blue underline underline-offset-2"
            href="mailto:pharitsmitasin@gmail.com"
          >
            pharitsmitasin@gmail.com
          </a>
        </p>
      </div>
    </>
  );
}

export default Index;
