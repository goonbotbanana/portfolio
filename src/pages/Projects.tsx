import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import market from "../assets/market.gif";
import margotai from "../assets/margotai2.png";
import cosmic from "../assets/cosmic.gif";
import feprep from "../assets/feprep.png";
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
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
                <h1 className="mt-4 text-xl text-left flex flex-row items-center">
                  <a
                    className="mr-4 transition-all duration-300 ease-in-out link link-underline link-underline-black"
                    href="https://feprep.org"
                  >
                    <Link to="https://feprep.org">FEPrep</Link>{" "}
                  </a>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8, x: -25 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="flex flex-row items-center"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=ts,tailwind,next"
                      // omit mt-4 from this class since it's at the top of the list.
                      className="max-h-9 opacity-90"
                      alt="ts, tailwind, react"
                    ></img>
                  </motion.span>
                </h1>
                <h2 className="text-sm text-slate-500 font-medium text-left mb-4">
                  I can't reverse a linked list.
                </h2>
                <ul className="text-left mt-4 text-md text-slate-500 list-disc leading-relaxed">
                  <li className="px-2">
                    A new way to prepare for the University of Central Florida's
                    Foundation Exam.
                  </li>
                </ul>
                <Link
                  to="https://feprep.org"
                  target="_blank"
                  aria-label="FEPrep"
                >
                  <motion.img
                    src={feprep}
                    className="object-cover mt-4 opacity-90 shadow-lg transition-all duration-500 hover:shadow-none"
                    alt="FEPrep image"
                    whileHover={{ scale: 1.05, opacity: 0.85 }}
                    transition={{ duration: 0.01, delay: 0 }}
                  ></motion.img>
                </Link>
              </div>
              <div className="mt-4">
                <h1 className="mt-4 text-xl text-left flex items-center">
                  <a
                    className="mt-4 mr-4 transition-all duration-300 ease-in-out link link-underline link-underline-black"
                    href="https://github.com/goonbotbanana/Market-Insight"
                  >
                    <Link to="https://github.com/goonbotbanana/Market-Insight">
                      Market Insight
                    </Link>
                  </a>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8, x: -25 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="flex flex-row items-center"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=js,tailwind,react"
                      className="mt-4 flex flex-row max-h-9 opacity-90"
                      alt="js, tailwind, react"
                    ></img>{" "}
                  </motion.span>
                </h1>
                <h2 className="text-sm text-slate-500 font-medium text-left mb-4">
                  How's my portfolio today?
                </h2>
                <ul className="text-left mt-4 text-md text-slate-500 list-disc leading-relaxed">
                  <li className="px-2">
                    Utilizes Finnhub API to fetch real-time and historical stock
                    data alongside the Recharts library for data visualization.
                  </li>
                </ul>
                <Link
                  to="https://github.com/goonbotbanana/Market-Insight"
                  target="_blank"
                  aria-label="Market Insight"
                >
                  <motion.img
                    src={market}
                    className="object-cover mt-4 opacity-90 shadow-lg transition-all duration-500 hover:shadow-none"
                    alt="Market Insight Gif"
                    whileHover={{ scale: 1.05, opacity: 0.85 }}
                    transition={{ duration: 0.01, delay: 0 }}
                  ></motion.img>
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
                    initial={{ opacity: 0, scale: 0.8, x: -25 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
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
                  <li className="px-2">
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
                  <motion.img
                    src={margotai}
                    alt="Margot.AI Gif"
                    className="object-cover mt-4 opacity-90 shadow-md transition-all duration-500 hover:shadow-none"
                    whileHover={{ scale: 1.05, opacity: 0.85 }}
                    transition={{ duration: 0.01, delay: 0 }}
                  ></motion.img>
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
                    initial={{ opacity: 0, scale: 0.8, x: -25 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
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
                  <li className="px-2">
                    A LAMP stack application, capable of handling CRUD
                    operations for contact lists.
                  </li>
                </ul>
                <Link
                  to="https://github.com/CoderSolian/Cosmic-Contacts"
                  target="_blank"
                  aria-label="Cosmic Contacts"
                >
                  <motion.img
                    src={cosmic}
                    alt="Cosmic Contacts Gif"
                    className="object-cover mt-4 opacity-90 shadow-lg transition-all duration-500 hover:shadow-none"
                    whileHover={{ scale: 1.05, opacity: 0.85 }}
                    transition={{ duration: 0.01, delay: 0 }}
                  ></motion.img>
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
