import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Aboutme from "./Components/Aboutme";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contactme from "./Components/Contactme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-6 -bg--light_background px-6 py-3">
      <Navbar />
      <main className="flex flex-col gap-6">
        <Aboutme />
        <Skills></Skills>
        <Projects></Projects>
      </main>
      <footer>
        <Contactme></Contactme>
      </footer>
    </div>
  );
}

export default App;
