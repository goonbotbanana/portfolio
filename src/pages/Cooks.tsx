// import React from "react";
import "../App.css";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "../components/Nav";

function Cooks() {
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
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-left mt-8">
              I really love the culinary arts and cooking for health.
              <p className="text-left">
                Here I'll be showcasing some of my favorite creations.
              </p>
            </p>
            <hr className="my-4 border-gray-400 dark:border-gray-500"></hr>
            <h1 className="shrink-5 text-xl flex flex-row justify-start">
              <span className="mr-4 transition-all duration-300 ease-in-out link link-underline link-underline-black">
                WIP &#129361;
              </span>
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default Cooks;
