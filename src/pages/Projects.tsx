import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import market from "../assets/market.gif";
import margotai from "../assets/margotai2.png";
import cosmic from "../assets/cosmic.gif";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
  return (
    <div>
      <>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <div className="mx-[0%] md:mx-[15%] lg:mx-[25%] min-h-screen flex flex-col">
          <Nav />
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: 0,
              }}
            >
              <p className="text-left mt-8">
                <p className="text-left mt-4">
                  I love to craft beautiful interfaces and I thrive on the front
                  end of applications.
                </p>
                <p className="text-left mt-2">
                  Here are some of my highlights.
                </p>
              </p>
              <hr className="my-4 border-gray-400 dark:border-gray-500"></hr>
              <div className="mt-4">
                <h1 className="shrink-5 text-xl text-left flex flex-row items-center">
                  <a
                    className="mr-4 transition-all duration-300 ease-in-out link link-underline link-underline-black"
                    href="https://github.com/goonbotbanana/Market-Insight"
                  >
                    <Link to="https://github.com/goonbotbanana/Market-Insight">
                      Market Insight
                    </Link>{" "}
                  </a>
                  <motion.span
                    initial={{ opacity: 0.3, scale: 0.8, x: -25 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="flex flex-row items-center"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=js,tailwind,react"
                      className="max-h-9 opacity-90"
                      alt="js, tailwind, react"
                    ></img>
                  </motion.span>
                </h1>
                <h2 className="text-sm text-slate-500 font-medium text-left mb-4">
                  How's my portfolio today?
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
                  aria-label="Market Insight"
                >
                  <img
                    src={market}
                    className="object-cover mt-4 opacity-90 shadow-lg transition-all duration-300 hover:shadow-none hover:ring-4 ring-light-blue ring-offset-2"
                    alt="Market Insight Gif"
                  ></img>
                </Link>
              </div>
              <div className="mt-4">
                <h1 className="mt-4 text-xl text-left flex  items-center">
                  <a
                    className="mt-4 mr-4 transition-all duration-300 ease-in-out link link-underline link-underline-black"
                    href="https://github.com/gabeparra/Margot.AI"
                  >
                    <Link to="https://github.com/gabeparra/Margot.AI">
                      Margot.AI
                    </Link>
                  </a>
                  <motion.span
                    initial={{ opacity: 0.3, scale: 0.8, x: -25 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="flex flex-row items-center"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=ts,react,mongo"
                      className="mt-4 flex flex-row max-h-9 opacity-90"
                      alt="ts, react, mongo"
                    ></img>{" "}
                  </motion.span>
                </h1>
                <h2 className="text-sm text-slate-500 font-medium text-left mb-4">
                  Helping your kids have fun while learning Spanish!
                </h2>
                <ul className="text-left mt-4 text-md text-slate-500 list-disc leading-relaxed">
                  <li>
                    Awarded ”Best Use of MongoDB Atlas” &#129351; at the{" "}
                    <a
                      className="font-semibold text-slate-500 transition-all duration-300 ease-in-out link link-underline link-underline-black"
                      href="https://www.ucf.edu/news/success-hacks-700-students-attend-ucf-knight-hacks-largest-hackathon/"
                      target="_blank"
                    >
                      2023 Knight Hacks
                    </a>
                    , Margot is an AI chatbot that assists in the education of
                    ESL children.
                  </li>
                </ul>
                <Link
                  to="https://github.com/gabeparra/Margot.AI"
                  target="_blank"
                  aria-label="Margot.AI"
                >
                  <img
                    src={margotai}
                    className="object-cover mt-4 opacity-90 shadow-md transition-all duration-300 hover:shadow-none hover:ring-4 ring-light-blue ring-offset-2"
                    alt="Margot.AI Gif"
                  ></img>
                </Link>
              </div>
              <div className="mt-4">
                <h1 className="mt-4 text-xl text-left flex items-center">
                  <a
                    className="mt-4 mr-4 transition-all duration-300 ease-in-out link link-underline link-underline-black"
                    href="https://github.com/CoderSolian/Cosmic-Contacts"
                  >
                    <Link to="https://github.com/CoderSolian/Cosmic-Contacts">
                      Cosmic Contacts
                    </Link>{" "}
                  </a>
                  <motion.span
                    initial={{ opacity: 0.3, scale: 0.8, x: -25 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="flex flex-row items-center"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=js,php,mysql"
                      className="mt-4 flex flex-row max-h-9 opacity-90"
                      alt="js, php, mysql"
                    ></img>
                  </motion.span>
                </h1>
                <h2 className="text-sm text-slate-500 font-medium text-left mb-4">
                  Keep your contacts in order with this interstellar app.
                </h2>
                <ul className="text-left mt-4 text-md text-slate-500 list-disc leading-relaxed">
                  <li>
                    A LAMP stack application, capable of handling CRUD
                    operations for contact lists.
                  </li>
                </ul>
                <Link
                  to="https://github.com/CoderSolian/Cosmic-Contacts"
                  target="_blank"
                  aria-label="Cosmic Contacts"
                >
                  <img
                    src={cosmic}
                    className="object-cover mt-4 opacity-90 shadow-lg transition-all duration-300 hover:shadow-none hover:ring-4 ring-light-blue ring-offset-2"
                    alt="Cosmic Contacts Gif"
                  ></img>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* end of screen div */}
        </div>
      </>
    </div>
  );
}
