import "./App.css";

function App() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      ></link>
      <div className="mx-[5%] md:mx-[25%] lg:mx-[25%] min-h-screen flex flex-col">
        <h1 className="text-2xl font-bold mb-5 text-left">Pharit</h1>
        <p className="text-left mt-8">
          Hello! I'm an undergraduate student at the University of Central
          Florida studying Computer Science. My interests lie in full stack web
          development and design.
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
          When I'm away from the screen, you can find me in the gym, traveling
          with my friends and family, learning about personal finance,
          experimenting with new recipes in the kitchen, and obsessing over
          <a
            className="font-semibold transition-colors duration-300 ease-in-out hover:text-dark-blue"
            href="https://www.youtube.com/watch?v=NLphEFOyoqM"
          >
            {" "}
            Laufey
          </a>
          .
        </p>
        <p className="text-left mt-16">
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
        <h1 className="text-center mt-16 text-2xl">WIP!</h1>
      </div>
    </>
  );
}

export default App;
