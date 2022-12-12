import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Aboutme from "./Components/Aboutme";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="-bg--light_background px-6 py-3">
      <Navbar />
      <main>
        <Aboutme />
        <Skills></Skills>
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;
