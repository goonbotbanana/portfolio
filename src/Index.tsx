import "./App.css";

function Index() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      ></link>
      <div className="mx-[5%] md:mx-[25%] lg:mx-[25%] min-h-screen flex flex-col">
        <h1 className="text-2xl font-bold mb-5 text-left">
          {" "}
          <a
            className="transition-colors duration-300 ease-in-out hover:text-dark-blue"
            href="https://smitasin.dev"
          >
            Pharit
          </a>
        </h1>
        <p className="text-left mt-8">
          Hello! I'm an undergraduate student at the University of Central
          Florida in my third year of studying Computer Science. My interests
          lie in full stack web development and front-end design.
        </p>
        <p className="text-left mt-4">
          At the moment, I'm working on the front end of a{" "}
          <a
            className="font-semibold transition-colors duration-300 ease-in-out hover:text-dark-blue"
            href="https://github.com/CoderSolian/Cosmic-Contacts"
          >
            space themed contact management application
          </a>{" "}
          for my Processes for Object Oriented Software Development class. I'm
          also working on improving my skills in React, TypeScript, and
          Tailwind.
        </p>
        <p className="text-left mt-4">
          You can find me in the gym,{" "}
          <a
            className="font-semibold transition-colors duration-300 ease-in-out hover:text-dark-blue"
            href="https://www.linkedin.com/feed/update/urn:li:activity:7120543526513164288/"
          >
            attending hackathons around Florida,
          </a>{" "}
          traveling with friends and family, exploring personal finance, and
          obsessing over
          <a
            className="font-semibold transition-colors duration-300 ease-in-out hover:text-dark-blue"
            href="https://www.youtube.com/watch?v=NLphEFOyoqM"
          >
            {" "}
            Laufey
          </a>
          .
        </p>
        <p className="text-left mt-4">
          I'm always looking to learn more and improve my skills in software
          engineering through collaborative work.
        </p>
        <p className="text-left mt-4">
          You can reach me at{" "}
          <a className="font-semibold" href="mailto:pharitsmitasin@gmail.com">
            <u className="transition-colors duration-300 ease-in-out hover:text-dark-blue">
              pharitsmitasin@gmail.com
            </u>
          </a>
        </p>
        <p className="text-left mt-8">
          <a
            className="font-semibold mr-4"
            href="https://drive.google.com/file/d/12YdcXV5d95G_JmFGbJBBZ5NfJ1g-Ti7p/view?usp=sharing"
          >
            <u className="transition-colors duration-300 ease-in-out hover:text-dark-blue"></u>
          </a>
          <a
            className="font-semibold mr-4"
            href="https://github.com/goonbotbanana"
          >
            <u className="transition-colors duration-300 ease-in-out hover:text-dark-blue">
              Github
            </u>
          </a>
          <a
            className="font-semibold mr-4"
            href="https://www.linkedin.com/in/pharit/"
          >
            <u className="transition-colors duration-300 ease-in-out hover:text-dark-blue">
              LinkedIn
            </u>
          </a>
        </p>
      </div>
    </>
  );
}

export default Index;
