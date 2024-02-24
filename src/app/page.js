import Image from "next/image";

import Home from '../Components/Home/Home';
import AboutMe from '../Components/AboutMe/AboutMe';
import Skills from '../Components/Skills/Skills';
import Certificates from '../Components/Certificates/Certificates';
import Projects from '../Components/Projects/Projects';


export default function App() {
  return (
    <main>
       <Home />
       <AboutMe />
       <Skills />
       <Certificates />
       <Projects />
    </main>
  );
}
