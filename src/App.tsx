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
            className="underline"
            href="https://github.com/CoderSolian/Cosmic-Contacts"
          >
            space themed contact management application
          </a>{" "}
          for my Processes of Object Oriented Software Development class. I'm
          also working on improving my skills in React, TypeScript, and
          Tailwind.
        </p>
        <p className="text-left mt-4">
          Outside of coding, you can find me in the gym, traveling with my
          family, obessing over personal finances, experimenting with new
          recipes in the kitchen, and attending live music performances ranging
          from classical to EDM.
        </p>
        <p className="text-left mt-16">
          I'm currently looking for an internship for Summer 2024 and am
          expected to graduate in the Spring of 2025.
        </p>
        <p className="text-left mt-4">
          Feel free to reach out to me at{" "}
          <a className="font-semibold" href="mailto:pharitsmitasin@gmail.com">
            <u>pharitsmitasin@gmail.com</u>
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
