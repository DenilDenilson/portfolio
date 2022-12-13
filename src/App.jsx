import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Aboutme from "./Components/Aboutme";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contactme from "./Components/Contactme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-6 -bg--light_background px-6 py-3 lg:gap-y-20 lg:px-24 lg:py-12">
        <main className="flex flex-col gap-6  lg:gap-y-12">
          <Aboutme />
          <Skills></Skills>
          <Projects></Projects>
        </main>
        <footer>
          <Contactme></Contactme>
        </footer>
      </div>
    </>
  );
}

export default App;
