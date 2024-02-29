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
            <div className="mx-[0%] md:mx-[15%] lg:mx-[25%] min-h-screen flex flex-col">
              <p className="text-center mt-8">WIP</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default Cooks;
