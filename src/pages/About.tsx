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

      <div className="mx-[0%] md:mx-[15%] lg:mx-[25%] min-h-screen flex flex-col">
        <Navbar />
        <p className="text-left mt-8">
          I'm{" "}
          <a
            className="font-semibold text-slate-500 transition-all duration-300 ease-in-out link link-underline link-underline-black"
            href="https://www.linkedin.com/in/pharit/"
            target="_blank"
          >
            Pharit
          </a>
          , a software engineer studying at UCF.{" "}
          <p className="mt-4">
            Here are some of my favorite technologies to play with:
          </p>
        </p>
        <img
          src="https://skillicons.dev/icons?i=ts,tailwind,react,nextjs,figma,vercel,vite"
          className="mt-4 max-w-md w-auto h-auto opacity-90"
          alt="icons with technologies I like to use: typescript, tailwind, react, next.js, figma, vercel, and vite"
        ></img>
        <hr className="my-6 border-gray-400 dark:border-gray-500"></hr>
        <p className="text-left">
          I most enjoy building software in the sweet spot where design and
          engineering meet — things that look good but are also built well under
          the hood. When I’m not at the computer, I’m usually lifting, cooking,
          listening to{" "}
          <a
            className="font-semibold text-slate-500 transition-all duration-300 ease-in-out link link-underline link-underline-black"
            href="https://www.youtube.com/watch?v=32RhpfhWxu4"
            target="_blank"
          >
            Laufey
          </a>
          , or finding another{" "}
          <a
            className="font-semibold text-slate-500 transition-all duration-300 ease-in-out link link-underline link-underline-black"
            href="https://www.linkedin.com/feed/update/urn:li:activity:7120543526513164288/"
            target="_blank"
          >
            hackathon
          </a>{" "}
          to attend.
        </p>
        <p className="text-left mt-4">
          I'm always looking to learn more and improve my skills in software
          engineering through collaborative work.
        </p>
        <hr className="my-6 border-gray-400 dark:border-gray-500"></hr>
        <p className="text-left">
          You can reach me at{" "}
          <a
            className="font-semibold transition-all duration-300 ease-in-out link link-underline link-underline-black"
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
