import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Education from "./Components/Education";
import Skill from "./Components/Skills";
import Project from "./Components/Project";
import Hobbies from "./Components/Hobbies";
import Ambitions from "./Components/Ambitions";
import Efforts from "./Components/Efforts";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />

      <section id="education">
        <Education />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="hobbies">
        <Hobbies />
      </section>
      <section id="ambitions">
        <Ambitions />
      </section>
      <section id="efforts">
        <Efforts />
      </section>
      <Footer />
    </Router>
  );
}

export default App;
