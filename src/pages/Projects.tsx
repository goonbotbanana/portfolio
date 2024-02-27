import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import market from "../assets/market.gif";
import margotai from "../assets/margotai2.png";
import cosmic from "../assets/cosmic.gif";

export default function Projects() {
  return (
    <div>
      <>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <div className="mx-[0%] md:mx-[25%] lg:mx-[25%] min-h-screen flex flex-col">
          <Nav />
          <p className="text-left mt-4">
            <p className="text-left mt-4">
              I love to craft beautiful designs and I thrive on the front end of
              applications.
            </p>
            <p className="text-left mt-4">Here are some of my highlights.</p>
          </p>
          <hr className="my-4 border-gray-400 dark:border-gray-500"></hr>
          <div>
            <h1 className="text-xl text-left flex flex-wrap items-center">
              <a className="mt-4 mr-4 transition-colors duration-500 ease-in-out hover:text-light-blue underline underline-offset-2">
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
                Utilizes Finnhub API to fetch real-time and historical stock
                data alongside the Recharts library for data visualization.
              </li>
            </ul>
            <Link
              to="https://github.com/goonbotbanana/Market-Insight"
              target="_blank"
            >
              <img
                src={market}
                className="object-cover mt-4 opacity-90 transition-all duration-500 hover:ring-4 ring-light-blue ring-offset-2"
              ></img>
            </Link>
          </div>
          <div>
            <h1 className="text-xl text-left flex flex-wrap items-center">
              <a className="mt-4 mr-4 transition-colors duration-500 ease-in-out hover:text-light-blue underline underline-offset-2">
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
                A LAMP stack application, capable of handling CRUD operations
                for contact lists.
              </li>
            </ul>
            <Link
              to="https://github.com/CoderSolian/Cosmic-Contacts"
              target="_blank"
            >
              <img
                src={cosmic}
                className="object-cover mt-4 opacity-90 transition-all duration-500 hover:ring-4 ring-light-blue ring-offset-2"
              ></img>
            </Link>
          </div>
          <div>
            <h1 className="text-xl text-left flex flex-wrap items-center">
              <a className="mt-4 mr-4 transition-colors duration-500 ease-in-out hover:text-light-blue underline underline-offset-2">
                <Link to="https://github.com/gabeparra/Margot.AI">
                  Margot.AI
                </Link>
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
            <Link to="https://github.com/gabeparra/Margot.AI" target="_blank">
              <img
                src={margotai}
                className="object-cover mt-4 opacity-90 transition-all duration-500 hover:ring-4 ring-light-blue ring-offset-2"
              ></img>
            </Link>
          </div>
        </div>
      </>
    </div>
  );
}