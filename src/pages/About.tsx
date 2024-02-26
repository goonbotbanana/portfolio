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
          Hello, I'm Pharit. I'm an undergraduate student at the University of
          Central Florida in my third year of studying Computer Science. My
          interests lie in full stack web development and front-end design.
        </p>
        <p className="text-left mt-4">
          At the moment, I'm working on an{" "}
          <a
            className="font-medium transition-colors duration-300 ease-in-out hover:text-dark-blue"
            href="https://github.com/MewingCentral/FEPrep"
            target="_blank"
          >
            exam prep tool
          </a>{" "}
          aimed at UCF computer science students preparing to take the{" "}
          <a
            className="font-medium transition-colors duration-300 ease-in-out hover:text-dark-blue"
            href="https://www.cs.ucf.edu/ucf_section/foundation-exam/"
            target="_blank"
          >
            Foundation Exam.
          </a>{" "}
          This tool will allow students to practice questions in a "LeetCode"
          style, professors to upload questions, and for all users to
          collaborate and discuss questions in forums.
        </p>
        <p className="text-left mt-4">
          I'm always looking to learn more and improve my skills in software
          engineering through collaborative work.
        </p>
        <p className="text-left mt-8">
          You can reach me at{" "}
          <a
            className="font-semibold transition-all duration-500 ease-in-out hover:text-dark-blue"
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
