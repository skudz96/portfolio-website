import Header from "./Components/Header";
import TitleScreen from "./Components/TitleScreen";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <TitleScreen />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
